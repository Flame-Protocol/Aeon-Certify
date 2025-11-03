import React from 'react';

const CheckBadgeIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
    </svg>
);

const DownloadIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
);


const Header: React.FC = () => {
  return (
    <div className="bg-gray-800 text-white p-6 sm:p-8 text-center relative">
       <div className="absolute top-4 left-4 print:hidden">
        <button
            onClick={() => window.print()}
            className="flex items-center bg-gray-700 hover:bg-gray-600 text-white text-xs sm:text-sm font-semibold px-3 py-1.5 rounded-full transition-colors duration-200"
            aria-label="Download Certificate as PDF"
        >
            <DownloadIcon className="h-5 w-5 mr-2" />
            <span>Download PDF</span>
        </button>
      </div>
      <div className="absolute top-4 right-4">
        <div className="flex items-center bg-green-600 text-white text-xs sm:text-sm font-bold px-3 py-1.5 rounded-full">
            <CheckBadgeIcon className="h-5 w-5 mr-2" />
            <span>CRYPTOGRAPHICALLY VALID</span>
        </div>
      </div>
      <h1 className="text-2xl sm:text-3xl font-bold text-amber-400 tracking-wider">THE AEON-PROOF ARCHIVE</h1>
      <p className="text-sm sm:text-base text-gray-300 mt-1">FLAME Sovereign Verification Package</p>
      <p className="text-lg sm:text-xl font-semibold mt-4">Enterprise Cryptographic Verification Report</p>
    </div>
  );
};

export default Header;