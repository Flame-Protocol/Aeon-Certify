import React from 'react';

const HeaderBanner: React.FC = () => {
    return (
        <div className="header-banner">
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