import React, { useState, useEffect } from 'react';
import HeaderBanner from './components/HeaderBanner';
import ExecutiveSummary from './components/ExecutiveSummary';
import StatusBanner from './components/StatusBanner';
import PdfDownloadSection from './components/PdfDownloadSection';
import VerificationModule from './components/VerificationModule';
import FlameSeal from './components/FlameSeal';
import { verificationModules } from './constants';
import PrintPreviewModal from './components/PrintPreviewModal';

const App: React.FC = () => {
  const [openModuleId, setOpenModuleId] = useState<number | null>(1);
  const [isPrintModalOpen, setPrintModalOpen] = useState(false);

  const handleToggle = (moduleId: number) => {
    setOpenModuleId(prevOpenId => (prevOpenId === moduleId ? null : moduleId));
  };

  const handleOpenPrintPreview = () => {
    setPrintModalOpen(true);
  };

  const handleClosePrintPreview = () => {
    setPrintModalOpen(false);
  };

  const handleConfirmPrint = () => {
    setPrintModalOpen(false);
    // Use a short timeout to allow the modal to close visually before the print dialog freezes the page
    setTimeout(() => {
      window.print();
    }, 100);
  };

  useEffect(() => {
    if (isPrintModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Cleanup function to restore scrolling if component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isPrintModalOpen]);

  return (
    <>
      <PrintPreviewModal 
        isOpen={isPrintModalOpen}
        onClose={handleClosePrintPreview}
        onPrint={handleConfirmPrint}
      />
      <div id="printable-area">
        <HeaderBanner onOpenPrintPreview={handleOpenPrintPreview} />
        <div className="container">
          <ExecutiveSummary />
          <StatusBanner />
          <PdfDownloadSection />
          {verificationModules.map((module) => (
            <VerificationModule 
              key={module.id} 
              module={module}
              isOpen={openModuleId === module.id}
              onToggle={() => handleToggle(module.id)}
            />
          ))}
          <FlameSeal />
        </div>
      </div>
    </>
  );
};

export default App;
