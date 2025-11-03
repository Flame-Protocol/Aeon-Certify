import React, { useState } from 'react';

declare global {
  interface Window {
    jspdf: any;
    html2canvas: any;
  }
}

const PdfDownloadSection: React.FC = () => {
    const [isExecutiveLoading, setExecutiveLoading] = useState(false);
    const [isTechnicalLoading, setTechnicalLoading] = useState(false);

    const handleGeneratePdf = async (type: 'executive' | 'technical') => {
        if (type === 'executive') {
            setExecutiveLoading(true);
        } else {
            setTechnicalLoading(true);
        }

        const { jsPDF } = window.jspdf;
        const html2canvas = window.html2canvas;

        document.body.classList.add(`printing-${type}`);

        const elementToCapture = document.getElementById('root');

        if (elementToCapture) {
            try {
                const canvas = await html2canvas(elementToCapture, {
                    scale: 2,
                    useCORS: true,
                    backgroundColor: '#1a1a2e',
                });

                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const imgProps = pdf.getImageProperties(imgData);
                const ratio = imgProps.height / imgProps.width;
                const imgHeight = pdfWidth * ratio;

                const pageHeight = pdf.internal.pageSize.getHeight();
                let heightLeft = imgHeight;
                let position = 0;

                pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
                heightLeft -= pageHeight;

                while (heightLeft > 0) {
                    position -= pageHeight;
                    pdf.addPage();
                    pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
                    heightLeft -= pageHeight;
                }

                pdf.save(`FLAME-Verification-${type === 'executive' ? 'Executive-Summary' : 'Technical-Audit'}.pdf`);
            } catch (error) {
                console.error("Error generating PDF:", error);
                alert("Sorry, there was an error generating the PDF. Please try again.");
            }
        }

        document.body.classList.remove(`printing-${type}`);

        if (type === 'executive') {
            setExecutiveLoading(false);
        } else {
            setTechnicalLoading(false);
        }
    };


    return (
        <div className="pdf-download-section">
            <h2>📄 Download Verification Documents</h2>
            <p style={{ textAlign: 'center', color: '#c9c9c9', marginBottom: '30px' }}>
                Complete audit package: Executive summary for banking review + technical verification for compliance teams
            </p>
            
            <div className="pdf-buttons-container">
                <div className="pdf-button-card">
                    <h3>📋 Executive Summary</h3>
                    <p>
                        Plain-language certificate for banking and compliance review. 
                        Presents authorization in familiar audit report format.
                    </p>
                     <button className="pdf-download-btn" onClick={() => handleGeneratePdf('executive')} disabled={isExecutiveLoading || isTechnicalLoading}>
                        {isExecutiveLoading ? 'Generating...' : '📥 Download Executive Summary'}
                    </button>
                    <p style={{ fontSize: '0.85em', marginTop: '15px', color: '#888' }}>
                        Banker-friendly: Authorization, collateral, coverage, settlement
                    </p>
                </div>

                <div className="pdf-button-card">
                    <h3>🔐 Complete Technical Audit</h3>
                    <p>
                        Full cryptographic verification with signatures, hashes, blockchain proofs, 
                        and Merkle tree validation data.
                    </p>
                    <button className="pdf-download-btn" onClick={() => handleGeneratePdf('technical')} disabled={isExecutiveLoading || isTechnicalLoading}>
                        {isTechnicalLoading ? 'Generating...' : '📥 Download Technical Audit'}
                    </button>
                    <p style={{ fontSize: '0.85em', marginTop: '15px', color: '#888' }}>
                        Technical: All cryptographic proofs and verification data
                    </p>
                </div>
            </div>

            <div style={{ marginTop: '30px', padding: '20px', background: 'rgba(100, 149, 237, 0.1)', borderRadius: '10px', border: '2px solid #6495ed' }}>
                <h4 style={{ color: '#6495ed', marginBottom: '10px', textAlign: 'center' }}>Document Strategy</h4>
                <p style={{ color: '#c9c9c9', textAlign: 'center', lineHeight: 1.7 }}>
                    <strong>Executive Summary:</strong> For initial banking and compliance review (plain language)<br />
                    <strong>Technical Audit:</strong> For detailed technical and security verification<br /><br />
                    Together, they provide complete institutional-grade verification
                </p>
            </div>
        </div>
    );
};

export default PdfDownloadSection;