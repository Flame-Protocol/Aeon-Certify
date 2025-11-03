import React from 'react';

const PrintIcon: React.FC<{ style?: React.CSSProperties }> = ({ style }) => (
    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="currentColor" style={style}>
        <path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zM16 18H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM18 3H6v4h12V3z"/>
    </svg>
);

interface HeaderBannerProps {
  onOpenPrintPreview?: () => void;
  isPreview?: boolean;
}

const HeaderBanner: React.FC<HeaderBannerProps> = ({ onOpenPrintPreview, isPreview = false }) => {
    return (
        <div className="header-banner">
            {!isPreview && (
                <button className="btn-print" onClick={onOpenPrintPreview}>
                    <PrintIcon />
                    <span>Print Certificate</span>
                </button>
            )}
            <div className="archive-title">THE AEON-PROOF ARCHIVE</div>
            <div className="archive-subtitle">FLAME Sovereign Verification Package</div>
            <div className="banking-subtitle">
                Independent Third-Party Audit • Traditional Wire Settlement
            </div>
            
            <div className="reference-bar">
                <table>
                    <tbody>
                        <tr>
                            <td><strong>Registry Reference:</strong> PFC-2025-001-7B3A</td>
                            <td><strong>Issued To:</strong> GB Dynamics Inc.</td>
                        </tr>
                        <tr>
                            <td><strong>Verification Timestamp:</strong> 2024-10-28T13:40:00Z</td>
                            <td><strong>Settlement:</strong> Traditional Wire Transfer • Blockchain = Proof Only</td>
                        </tr>
                        <tr>
                            <td colSpan={2} style={{textAlign: 'center'}}><strong>External Auditor:</strong> Aeonic Verification Assembly (AVA)</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HeaderBanner;
