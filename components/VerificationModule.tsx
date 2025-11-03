import React from 'react';
import type { VerificationModuleData, InputDetail } from '../types';

interface VerificationModuleProps {
  module: VerificationModuleData;
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

const OvercollateralizationChart: React.FC = () => {
    return (
        <div className="collateral-chart-container">
            <h4 className="chart-title">Over-Collateralization Visualization</h4>
            
            <div className="chart-bar-group">
                <div className="chart-label">
                    <span>Total Collateral Pool</span>
                    <span>$18,200,000,000</span>
                </div>
                <div className="bar-background">
                    <div className="bar-foreground bar-collateral" style={{ width: '100%' }}>
                        100%
                    </div>
                </div>
            </div>

            <div className="chart-bar-group">
                <div className="chart-label">
                    <span>Authorized Release (5.49% Utilization)</span>
                    <span>$1,000,000,000</span>
                </div>
                <div className="bar-background">
                    <div className="bar-foreground bar-release" style={{ width: '5.49%' }}>
                        5.49%
                    </div>
                </div>
            </div>
        </div>
    );
};


const VerificationModule: React.FC<VerificationModuleProps> = ({ module }) => {
  
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
      <div className="module-header">
        <div className="module-title">
          <span className="module-number">{module.moduleNumber}</span>
          <div>
            <h2>{module.title}</h2>
            <span className="term-translation">{module.bankingEquivalent}</span>
          </div>
        </div>
        <button className="btn-support" onClick={() => alert(module.bankingContext)}>
          📚 Banking Context
        </button>
      </div>

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
            <OvercollateralizationChart />
        </div>
      )}

      {module.inputs.map(input => (
        <InputField key={input.id} detail={input} />
      ))}
      
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
    </div>
  );
};

export default VerificationModule;