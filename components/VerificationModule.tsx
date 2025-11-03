import React from 'react';
import type { VerificationModuleData, InputDetail } from '../types';

interface VerificationModuleProps {
  module: VerificationModuleData;
  isOpen: boolean;
  onToggle: () => void;
  isPreview?: boolean;
}

const InputField: React.FC<{ detail: InputDetail }> = ({ detail }) => {
  const commonProps = {
    id: detail.id,
    value: detail.value,
    readOnly: true,
    style: {
      fontWeight: detail.isBold ? 'bold' : 'normal',
      color: detail.color ? detail.color : '#eee',
      fontSize: detail.isBold ? '16px' : '14px'
    }
  };

  return (
    <div className="input-group">
      <label htmlFor={detail.id}>
        {detail.label}
        {detail.termTranslation && <span className="term-translation">{detail.termTranslation}</span>}
      </label>
      {detail.type === 'textarea' ? (
        <textarea {...commonProps} rows={5}></textarea>
      ) : (
        <input type="text" {...commonProps} />
      )}
    </div>
  );
};

const ChevronIcon: React.FC<{ isOpen: boolean }> = ({ isOpen }) => (
    <svg 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24" 
        strokeWidth={2.5} 
        stroke="currentColor"
        style={{ 
            width: '24px', 
            height: '24px', 
            color: '#d4af37',
            transition: 'transform 0.3s ease-in-out',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
        }}
    >
        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
);


const VerificationModule: React.FC<VerificationModuleProps> = ({ module, isOpen, onToggle, isPreview = false }) => {
  
  const handleButtonClick = (action: string) => {
    const separatorIndex = action.indexOf(':');
    if (separatorIndex === -1) {
        console.warn('Invalid action format:', action);
        return;
    }
    const type = action.substring(0, separatorIndex);
    const value = action.substring(separatorIndex + 1);

    if (type === 'alert') {
      alert(value);
    } else if (type === 'url') {
      window.open(value, '_blank');
    }
  };
  
  return (
    <div className="verification-module">
      <div className="module-header" style={{ cursor: isPreview ? 'default' : 'pointer' }} onClick={!isPreview ? onToggle : undefined}>
        <div className="module-title">
          <span className="module-number">{module.moduleNumber}</span>
          <div>
            <h2>{module.title}</h2>
            <span className="term-translation">{module.bankingEquivalent}</span>
          </div>
        </div>
        {!isPreview && (
            <div className="module-controls">
                <button 
                    className="btn-support" 
                    onClick={(e) => {
                        e.stopPropagation(); 
                        alert(module.bankingContext);
                    }}
                >
                    📚 Banking Context
                </button>
                <ChevronIcon isOpen={isOpen} />
            </div>
        )}
      </div>

      <div className={`module-content ${isOpen ? 'open' : ''}`}>
        <div className="explanation-box">
            {module.explanation}
        </div>

        {module.id === 3 && (
            <div style={{ background: 'rgba(127, 255, 127, 0.1)', padding: '20px', borderRadius: '8px', marginBottom: '25px', border: '2px solid #7fff7f' }}>
                <p style={{ color: '#7fff7f', fontWeight: 'bold', marginBottom: '8px' }}>Collateral Coverage Analysis:</p>
                <p style={{ color: '#c9c9c9', lineHeight: 1.6 }}>
                    <strong>Total Portfolio Value:</strong> $18,200,000,000<br />
                    <strong>Authorized Release:</strong> $1,000,000,000<br />
                    <strong>Coverage Ratio:</strong> 18.2:1 (exceptional over-collateralization)<br />
                    <strong>Utilization:</strong> Only 5.49% of available collateral
                </p>
            </div>
        )}

        {module.inputs.map(input => (
            <InputField key={input.id} detail={input} />
        ))}
        
        {!isPreview && (
            <div className="button-group">
                {module.buttons.map((button, index) => (
                <button 
                    key={index} 
                    className={button.type === 'verify' ? 'btn-verify' : 'btn-validate'}
                    onClick={() => handleButtonClick(button.action)}
                >
                    {button.text}
                </button>
                ))}
            </div>
        )}
      </div>
    </div>
  );
};

export default VerificationModule;
