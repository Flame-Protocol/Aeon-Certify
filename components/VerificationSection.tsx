import React from 'react';
import type { VerificationSectionData, VerificationDetail } from '../types';

interface VerificationSectionProps {
  section: VerificationSectionData;
}

const LinkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
    </svg>
);


const StatusBadge: React.FC<{ status: string; theme: 'green' | 'blue' }> = ({ status, theme }) => {
  const baseClasses = 'text-xs font-bold uppercase px-3 py-1 rounded-full';
  const themeClasses = {
    green: 'bg-green-100 text-green-800',
    blue: 'bg-blue-100 text-blue-800',
  };
  return <span className={`${baseClasses} ${themeClasses[theme]}`}>{status}</span>;
};


const DetailRow: React.FC<{ detail: VerificationDetail }> = ({ detail }) => {
  const linkPrefix = detail.linkPrefix || '';

  return (
    <div className="grid grid-cols-3 gap-4 py-3 border-b border-gray-100 last:border-b-0">
      <dt className="text-sm font-medium text-gray-500">{detail.label}</dt>
      <dd className="col-span-2 text-sm text-gray-900">
        {detail.isLink ? (
          <a
            href={`${linkPrefix}${detail.value}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline break-all"
          >
            <span className={`${detail.isMono ? 'font-mono' : ''} ${detail.truncate ? 'truncate' : ''}`}>{detail.value}</span>
            <LinkIcon className="h-4 w-4 ml-1.5 flex-shrink-0"/>
          </a>
        ) : (
          <span className={`${detail.isMono ? 'font-mono' : ''} break-words`}>{detail.value}</span>
        )}
      </dd>
    </div>
  );
};

const VerificationSection: React.FC<VerificationSectionProps> = ({ section }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="bg-gray-50 p-4 sm:p-5 flex flex-col sm:flex-row justify-between sm:items-center">
        <div>
            <h3 className="text-lg font-semibold text-gray-800">{section.bankFriendlyTitle}</h3>
            <p className="text-xs text-gray-500 font-mono mt-1">{section.technicalTitle}</p>
        </div>
        <div className="mt-2 sm:mt-0">
            <StatusBadge status={section.status} theme={section.statusTheme} />
        </div>
      </div>
      <div className="p-4 sm:p-5">
        <p className="text-sm text-gray-600 mb-4">{section.description}</p>
        <dl>
          {section.details.map((detail, index) => (
            <DetailRow key={index} detail={detail} />
          ))}
        </dl>
      </div>
    </div>
  );
};

export default VerificationSection;