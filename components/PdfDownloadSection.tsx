import React from 'react';

const PdfDownloadSection: React.FC = () => {

    const generateExecutiveSummary = () => {
        alert('Generating Executive Summary PDF...\n\nThis will create a banker-friendly certificate with:\n• Plain language authorization details\n• Collateral coverage analysis\n• Settlement instructions\n• Banking terminology throughout');
    };
    
    const generateTechnicalAudit = () => {
        alert('Generating Technical Audit PDF...\n\nThis will create a complete cryptographic verification report with:\n• All hash values and signatures\n• Blockchain proofs\n• Merkle tree data\n• Technical specifications');
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
                     <button className="pdf-download-btn" onClick={generateExecutiveSummary}>
                        📥 Download Executive Summary
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
                    <button className="pdf-download-btn" onClick={generateTechnicalAudit}>
                        📥 Download Technical Audit
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
