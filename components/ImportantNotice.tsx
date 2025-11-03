
import React from 'react';

const InformationCircleIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
    </svg>
);


const ImportantNotice: React.FC = () => {
  return (
    <div className="mt-12 p-5 bg-amber-50 border-l-4 border-amber-500 rounded-r-lg">
      <div className="flex">
        <div className="flex-shrink-0">
          <InformationCircleIcon className="h-6 w-6 text-amber-500" />
        </div>
        <div className="ml-3">
          <h3 className="text-md font-bold text-amber-800">IMPORTANT: Settlement Method</h3>
          <div className="mt-2 text-sm text-amber-700 space-y-2">
            <p>
              This is <span className="font-bold">NOT</span> an on-chain ETH transfer. The $1B USD release is executed via a traditional banking wire transfer.
            </p>
            <p>
              The blockchain serves as the cryptographic proof of authorization (Token ID 1 representing $18.2B liens). The executing financial institution relies on this verified digital certificate to proceed with the wire transfer to GB Dynamics Inc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantNotice;
