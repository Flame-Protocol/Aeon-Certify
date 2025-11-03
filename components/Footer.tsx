
import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="bg-gray-800 text-gray-400 text-xs text-center p-4">
      <p>
        This verification package uses enterprise cryptographic methods to enable institutional auditors to independently validate authenticity through standard mathematical verification procedures. All verification operations are secure and can be independently confirmed.
      </p>
      <p className="mt-2 font-mono">
        Framework: FLAME Sovereign Verification Protocol | Reference: PFC-2025-001-7B3A
      </p>
      <p className="mt-2 text-gray-500">
        Issued by: The Aeonic Verification Assembly (AVA) | Report Generated: 2025-11-02
      </p>
    </div>
  );
};

export default Footer;
