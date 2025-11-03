
import React from 'react';

const SummaryItem: React.FC<{ label: string; value: string; valueClassName?: string }> = ({ label, value, valueClassName = '' }) => (
  <div className="bg-gray-50 p-4 rounded-lg">
    <p className="text-sm font-medium text-gray-500">{label}</p>
    <p className={`text-lg font-semibold text-gray-900 mt-1 ${valueClassName}`}>{value}</p>
  </div>
);


const Summary: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
      <div className="md:col-span-2 lg:col-span-4 bg-amber-500 text-white p-4 rounded-lg shadow-md">
        <p className="text-sm font-medium opacity-90">Release Amount</p>
        <p className="text-4xl font-bold tracking-tight mt-1">$1,000,000,000.00 USD</p>
      </div>
      <SummaryItem label="Issued To" value="GB Dynamics Inc." />
      <SummaryItem label="Registry Reference" value="PFC-2025-001-7B3A" />
      <SummaryItem label="Collateral Coverage" value="$18,200,000,000.00 USD" />
      <SummaryItem label="Collateralization Ratio" value="18.2x Overcollateralized" />
    </div>
  );
};

export default Summary;
