import React from 'react';

const FlameSeal: React.FC = () => {
  return (
    <div className="flame-seal">
      <p style={{ color: '#d4af37', fontSize: '1.1em', fontStyle: 'normal' }}>
        <strong>Issued by:</strong> The Aeonic Verification Assembly (AVA)
      </p>
      <p style={{ marginTop: '15px' }}>
        Independent third-party verification for institutional review under 12 USC § 3903<br />
        All verification operations use standard mathematical procedures and can be independently confirmed
      </p>
      <p style={{ marginTop: '20px', color: '#666' }}>
        Framework: FLAME Sovereign Verification Protocol | Reference: PFC-2025-001-7B3A
      </p>
    </div>
  );
};

export default FlameSeal;
