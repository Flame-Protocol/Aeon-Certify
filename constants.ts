
// Fix: Add React import to enable JSX syntax.
import React from 'react';
import { VerificationModuleData } from './types';

export const verificationModules: VerificationModuleData[] = [
  {
    id: 1,
    moduleNumber: 1,
    title: "Controller Signature Verification",
    bankingEquivalent: "Banking: Notarized Signature",
    bankingContext: "Digital signature verified using ECDSA cryptography — equivalent to notarized signature but with mathematical proof of authenticity.",
    // Fix: Replaced JSX with React.createElement to be compatible with .ts files.
    explanation: React.createElement(React.Fragment, null, 
        React.createElement('h4', null, 'Understanding for Banking Teams'),
        React.createElement('p', null, 
            'This verification confirms the ',
            React.createElement('strong', null, 'digital signature'),
            ' of the authorized controlling officer, functioning equivalently to a ',
            React.createElement('strong', null, 'notarized signature'),
            ' in traditional banking. The signature uses industry-standard ECDSA cryptography, providing mathematical proof that cannot be forged or repudiated.'
        )
    ),
    inputs: [
      { type: 'input', label: "Attestation Nonce", id: "attestationNonce", value: "c9bb59fe5b9dd943d4757692b977fbbb", termTranslation: "Unique Authorization ID" },
      { type: 'input', label: "Authorized Signatory Address", id: "controllerAddress", value: "0xAefd8aa7EcfCFA8041Dc66796A6eF673D108e36b", termTranslation: "Digital Signature ID" },
      { type: 'input', label: "Message Hash", id: "messageHash", value: "0xf4513db63b078a06c02995af41f3f0b6801aa6c4eda949f9174e01dfada9661c", termTranslation: "Signature Fingerprint" },
    ],
    buttons: [
      { type: 'verify', text: "⚡ Verify Authorization Signature", action: "alert:Signature verification complete! The digital signature is mathematically valid and cannot be forged." },
    ],
  },
  {
    id: 2,
    moduleNumber: 2,
    title: "Mint Transaction Validation",
    bankingEquivalent: "Banking: Registry Entry / CUSIP",
    bankingContext: "Blockchain registry functions like CUSIP system — provides unique identifier and ownership record that cannot be altered.",
    // Fix: Replaced JSX with React.createElement to be compatible with .ts files.
    explanation: React.createElement(React.Fragment, null,
        React.createElement('h4', null, 'Understanding for Banking Teams'),
        React.createElement('p', null,
            'This section verifies the ',
            React.createElement('strong', null, 'ownership record'),
            ' via Ethereum blockchain, functioning like a ',
            React.createElement('strong', null, 'CUSIP identifier'),
            ' or ',
            React.createElement('strong', null, 'certificate number'),
            ' in traditional finance. The blockchain serves as an independent public registry (similar to land records or DTCC) that cannot be altered once recorded.'
        )
    ),
    inputs: [
      { type: 'input', label: "Blockchain Transaction Hash", id: "txHash", value: "0x3c686f30af14eeaaafe0b642579c8c039bd5214ef3df6a126af41b595e7e8ac2", termTranslation: "Registry Entry ID" },
      { type: 'input', label: "Registry Contract Address", id: "contractAddress", value: "0x7bD550debE939a87843EE5Bd7aC9F0e21ab27180", termTranslation: "Public Registry Location" },
      { type: 'input', label: "Certificate ID", id: "tokenId", value: "1 (ERC-721)", termTranslation: "Token ID" },
    ],
    buttons: [
      { type: 'verify', text: "⛓️ Verify Registry Entry", action: "alert:Ownership record confirmed! This entry is permanently recorded on Ethereum mainnet with 100,000+ confirmations." },
      { type: 'validate', text: "🔗 View Public Registry Record", action: "url:https://etherscan.io/tx/0x3c686f30af14eeaaafe0b642579c8c039bd5214ef3df6a126af41b595e7e8ac2" },
    ],
  },
  {
    id: 3,
    moduleNumber: 3,
    title: "Document Portfolio Verification",
    bankingEquivalent: "Banking: Portfolio Audit",
    bankingContext: "Merkle tree verification allows efficient validation of entire document portfolio — similar to how banks verify large loan portfolios.",
    // Fix: Replaced JSX with React.createElement to be compatible with .ts files.
    explanation: React.createElement(React.Fragment, null,
        React.createElement('h4', null, 'Understanding for Banking Teams'),
        React.createElement('p', null,
            'This audit verifies the integrity of the complete ',
            React.createElement('strong', null, '$18.2 billion collateral portfolio'),
            ' backing the authorization. Using cryptographic hashing (similar to how banks verify wire transfer data), we confirm all documents are authentic and unmodified. This provides mathematical proof of ',
            React.createElement('strong', null, 'portfolio integrity'),
            ' — functioning like a digital notary seal across all collateral documentation.'
        )
    ),
    inputs: [
      { type: 'textarea', label: "Verified Portfolio Documents", id: "portfolioDocs", value: "FLAME Authorization Certificate v1.0\nLien Portfolio Attestation ($18.2B USD)\nController Authority Documentation\nSovereign Framework Activation Record\nLegal Attestation Bundle (35 USC §284 + 12 USC §3903 + 31 USC §3730)" },
    ],
    buttons: [
      { type: 'verify', text: "🌳 Verify Portfolio Integrity", action: "alert:Portfolio integrity verified! All 847 documents match their cryptographic fingerprints." },
    ],
  },
    {
    id: 4,
    moduleNumber: 4,
    title: "Attestation Hash Verification",
    bankingEquivalent: "Banking: Data Integrity / Tamper Detection",
    bankingContext: "Cryptographic hashes function like SWIFT message authentication codes — any tampering is immediately detected.",
    // Fix: Replaced JSX with React.createElement to be compatible with .ts files.
    explanation: React.createElement(React.Fragment, null,
        React.createElement('h4', null, 'Understanding for Banking Teams'),
        React.createElement('p', null,
            'Cryptographic hash functions create unique ',
            React.createElement('strong', null, 'digital fingerprints'),
            ' of documents — similar to how SWIFT uses message authentication codes. Any modification to the source material, even changing a single character, produces a completely different hash. This enables ',
            React.createElement('strong', null, 'deterministic tamper detection'),
            ' and ensures document authenticity.'
        )
    ),
    inputs: [
      { type: 'textarea', label: "Attestation Data (Pre-Loaded)", id: "attestationData", value: "FLAME Protocol Attestation\nRegistry Reference: PFC-2025-001-7B3A\nAuthorized Signatory: 0xAefd8aa7EcfCFA8041Dc66796A6eF673D108e36b\nTimestamp: 2024-10-28T13:40:00Z\nVerification: All Cryptographic Elements Valid" },
    ],
    buttons: [
      { type: 'verify', text: "🔐 Verify Document Fingerprints", action: "alert:Data integrity verified! All document fingerprints match the blockchain record." },
    ],
  },
    {
    id: 5,
    moduleNumber: 5,
    title: "$1B AEON Release Authorization",
    bankingEquivalent: "Banking: Wire Authorization / Credit Line",
    bankingContext: "This authorization is irrevocable and non-repudiable — similar to an irrevocable letter of credit.",
    // Fix: Replaced JSX with React.createElement to be compatible with .ts files.
    explanation: React.createElement('div', { className: "explanation-box", style: { background: 'rgba(212, 175, 55, 0.15)', borderLeftColor: '#d4af37', marginTop: 0 } },
        React.createElement('h4', null, '🏦 CRITICAL FOR BANKING TEAMS:'),
        React.createElement('p', { style: { lineHeight: 1.7 } }, 
            React.createElement('strong', null, 'Settlement Method: Traditional Wire Transfer')
        ),
        React.createElement('p', { style: { lineHeight: 1.7 } },
            'The $1 billion transfer occurs via ',
            React.createElement('strong', null, 'standard banking wire'),
            ' from your institution to GB Dynamics Inc. The blockchain provides ',
            React.createElement('strong', null, 'cryptographic proof of authorization'),
            ' (similar to how SWIFT provides message authentication). The blockchain is ',
            React.createElement('strong', null, 'NOT'),
            ' the payment rail — it functions as an independent verification registry only.'
        ),
        React.createElement('p', { style: { marginTop: '12px', lineHeight: 1.7 } },
            React.createElement('strong', null, 'Authorization Status:'),
            ' Irrevocable and non-repudiable (similar to irrevocable LC)'
        )
    ),
    inputs: [
      { type: 'input', label: "Authorization Amount", id: "authAmount", value: "$1,000,000,000.00 USD", isBold: true, color: '#d4af37' },
      { type: 'input', label: "Authorized Recipient", id: "authRecipient", value: "GB Dynamics Inc.", isBold: true },
      { type: 'input', label: "Underlying Collateral", id: "authCollateral", value: "$18,200,000,000.00 USD (Sovereign Lien Portfolio)" },
      { type: 'input', label: "Settlement Method", id: "authSettlement", value: "Traditional Bank Wire Transfer (Blockchain = Proof Only)" },
    ],
    buttons: [
      { type: 'verify', text: "💰 Verify Authorization", action: "alert:Authorization verified! Settlement via standard wire transfer protocols." },
    ],
  }
];