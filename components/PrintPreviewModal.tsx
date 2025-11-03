import React from 'react';
import HeaderBanner from './HeaderBanner';
import ExecutiveSummary from './ExecutiveSummary';
import StatusBanner from './StatusBanner';
import VerificationModule from './VerificationModule';
import FlameSeal from './FlameSeal';
import { verificationModules } from '../constants';


interface PrintPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPrint: () => void;
}

const PrintPreviewModal: React.FC<PrintPreviewModalProps> = ({ isOpen, onClose, onPrint }) => {
  if (!isOpen) return null;

  return (
    <div className="print-preview-overlay" onClick={onClose}>
      <div className="print-preview-modal" onClick={e => e.stopPropagation()}>
        <div className="print-preview-header">
          <h2>Certificate Print Preview</h2>
          <div className="print-preview-controls">
            <button className="btn-print-action" onClick={onPrint}>
              Confirm & Print
            </button>
            <button className="btn-cancel-action" onClick={onClose}>
              Cancel
            </button>
          </div>
        </div>
        <div className="print-preview-content">
            <div className="print-preview-sheet">
              {/* Re-render the printable content for a clean preview without interactive elements */}
              <HeaderBanner isPreview />
              <div className="container">
                <ExecutiveSummary />
                <StatusBanner />
                {verificationModules.map((module) => (
                    <VerificationModule 
                        key={module.id} 
                        module={module}
                        isOpen={true} // In preview, all modules are open
                        onToggle={() => {}} // No toggle in preview
                        isPreview
                    />
                ))}
                <FlameSeal />
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PrintPreviewModal;
