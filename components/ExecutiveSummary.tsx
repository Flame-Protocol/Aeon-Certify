import React from 'react';

const BankingCard: React.FC<{ label: string; value: string; isHighlight?: boolean, valueStyle?: React.CSSProperties }> = ({ label, value, isHighlight, valueStyle }) => (
    <div className="banking-card">
        <div className="label">{label}</div>
        <div className={`value ${isHighlight ? 'highlight' : ''}`} style={valueStyle}>{value}</div>
    </div>
);

const ExecutiveSummary: React.FC = () => {
    return (
        <div className="executive-banking-summary">
            <h2>$1 Billion Funding Authorization — Independently Audited</h2>
            
            <div className="banking-grid">
                <BankingCard label="Authorized Funding" value="$1,000,000,000" isHighlight />
                <BankingCard label="Collateral Pool" value="$18,200,000,000" />
                <div className="banking-card">
                    <div className="label">Coverage Ratio</div>
                    <div className="value">18.2:1</div>
                    <div style={{ fontSize: '0.85em', color: '#7fff7f', marginTop: '5px' }}>(5.49% utilization)</div>
                </div>
                <BankingCard label="Authorized Recipient" value="GB Dynamics Inc." valueStyle={{fontSize: '1.2em'}}/>
            </div>

            <div className="banking-explanation">
                <h4 style={{ color: '#7fff7f', marginBottom: '12px' }}>🏦 For Banking & Compliance Teams</h4>
                <p style={{ color: '#c9c9c9', lineHeight: 1.7 }}>
                    This authorization functions like a <strong data-tooltip="An official document where a bank commits to cover a payment if a party fails to fulfill a contractual obligation. Here, it is cryptographically secured for non-repudiation.">notarized bank guarantee</strong> with <strong data-tooltip="Mathematical evidence of authenticity and integrity that cannot be forged. It relies on complex algorithms to verify data, similar to how banks verify wire transfers.">cryptographic proof</strong>. 
                    The blockchain serves as an <strong data-tooltip="A decentralized, tamper-proof ledger (like the blockchain) that anyone can view but no single entity controls, similar to how property deeds are recorded in a public government office.">independent public registry</strong> (similar to <span data-tooltip="A unique nine-character identification number assigned to all stocks and registered bonds in the U.S. and Canada, used for clearing and settlement.">CUSIP</span> or land records) 
                    confirming authenticity and ownership. Settlement occurs via <strong data-tooltip="The standard electronic transfer of funds from one financial institution to another. The blockchain is used for authorization only, not for the transfer itself.">traditional wire transfer</strong> — 
                    the blockchain provides verification only, not payment processing.
                </p>
            </div>
        </div>
    );
};

export default ExecutiveSummary;