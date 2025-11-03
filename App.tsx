import React from 'react';
import HeaderBanner from './components/HeaderBanner';
import ExecutiveSummary from './components/ExecutiveSummary';
import StatusBanner from './components/StatusBanner';
import PdfDownloadSection from './components/PdfDownloadSection';
import VerificationModule from './components/VerificationModule';
import FlameSeal from './components/FlameSeal';
import { verificationModules } from './constants';

const App: React.FC = () => {
  return (
    <>
      <HeaderBanner />
      <div className="container">
        <ExecutiveSummary />
        <StatusBanner />
        <PdfDownloadSection />
        {verificationModules.map((module) => (
          <VerificationModule key={module.id} module={module} />
        ))}
        <FlameSeal />
      </div>
    </>
  );
};

export default App;
