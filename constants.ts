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
            React.createElement('strong', { 'data-tooltip': 'A cryptographic method used to verify the authenticity and integrity of a digital message or document. It is mathematically equivalent to a handwritten signature but far more secure.' }, 'digital signature'),
            ' of the authorized controlling officer, functioning equivalently to a ',
            React.createElement('strong', null, 'notarized signature'),
            ' in traditional banking. The signature uses industry-standard ',
            React.createElement('strong', { 'data-tooltip': 'Elliptic Curve Digital Signature Algorithm. A highly secure, industry-standard cryptographic method used by governments and corporations worldwide to create digital signatures.' }, 'ECDSA cryptography'),
            ', providing mathematical proof that cannot be forged or ',
            React.createElement('strong', { 'data-tooltip': 'The act of denying the validity of a contract or transaction. A non-repudiable signature provides mathematical proof that the signatory cannot later deny their action.' }, 'repudiated.')
        )
    ),
    inputs: [
      { type: 'input', label: "Attestation Nonce", id: "attestationNonce", value: "c9bb59fe5b9dd943d4757692b977fbbb", termTranslation: "Unique Authorization ID", tooltip: "A 'number used once' in cryptography to prevent replay attacks, ensuring that an old authorization cannot be maliciously reused. It functions as a unique serial number for this specific verification." },
      { type: 'input', label: "Authorized Signatory Address", id: "controllerAddress", value: "0xAefd8aa7EcfCFA8041Dc66796A6eF673D108e36b", termTranslation: "Digital Signature ID", tooltip: "The unique public identifier of the digital wallet used to create the cryptographic signature. It is the functional equivalent of the signatory's official, verifiable identity." },
      { type: 'input', label: "Message Hash", id: "messageHash", value: "0xf4513db63b078a06c02995af41f3f0b6801aa6c4eda949f9174e01dfada9661c", termTranslation: "Signature Fingerprint", tooltip: "A unique digital fingerprint of the authorization message. This hash is what is actually 'signed' in the cryptographic process, ensuring the integrity of the original message." },
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
            React.createElement('strong', { 'data-tooltip': 'An entry in a registry (in this case, the blockchain) that proves who owns a specific asset, similar to a title deed for real estate.' }, 'ownership record'),
            ' via ',
            React.createElement('strong', { 'data-tooltip': 'A globally distributed, decentralized public ledger. Once information is recorded on it, it is permanent and cannot be altered, providing a single source of truth.' }, 'Ethereum blockchain'),
            ', functioning like a ',
            React.createElement('strong', { 'data-tooltip': 'A unique nine-character identification number assigned to all stocks and registered bonds in the U.S. and Canada, used for clearing and settlement.' }, 'CUSIP identifier'),
            ' or ',
            React.createElement('strong', null, 'certificate number'),
            ' in traditional finance. The blockchain serves as an independent ',
             React.createElement('strong', { 'data-tooltip': 'A decentralized, tamper-proof ledger that anyone can view but no single entity controls, similar to how property deeds are recorded in a public government office.' }, 'public registry'),
            ' (similar to land records or DTCC) that cannot be altered once recorded.'
        )
    ),
    inputs: [
      { type: 'input', label: "Blockchain Transaction Hash", id: "txHash", value: "0x3c686f30af14eeaaafe0b642579c8c039bd5214ef3df6a126af41b595e7e8ac2", termTranslation: "Registry Entry ID", tooltip: "The unique ID for the transaction that recorded this authorization on the public blockchain registry. It can be used to independently look up and verify the record." },
      { type: 'input', label: "Registry Contract Address", id: "contractAddress", value: "0x7bD550debE939a87843EE5Bd7aC9F0e21ab27180", termTranslation: "Public Registry Location", tooltip: "The public address of the smart contract on the blockchain that manages the ownership and rules of these digital certificates. It acts as the location of the public registry." },
      { type: 'input', label: "Certificate ID", id: "tokenId", value: "1 (ERC-721)", termTranslation: "Token ID", tooltip: "The specific identifier for this unique digital certificate within the registry contract, similar to a specific CUSIP or stock certificate number. (ERC-721 is the technical standard for unique digital assets)." },
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
            ' backing the authorization. Using ',
            React.createElement('strong', { 'data-tooltip': "A process that converts any amount of data into a unique, fixed-size string of characters (a 'hash'). Any change to the original data, however small, will result in a completely different hash." }, 'cryptographic hashing'),
            ' (similar to how banks verify wire transfer data), we confirm all documents are authentic and unmodified. This provides mathematical proof of ',
            React.createElement('strong', { 'data-tooltip': 'Mathematical proof that the entire collection of documents is complete, authentic, and has not been tampered with since it was originally sealed.' }, 'portfolio integrity'),
            ' — functioning like a digital notary seal across all collateral documentation.'
        )
    ),
    inputs: [
      { type: 'textarea', label: "Verified Portfolio Documents", id: "portfolioDocs", value: "FLAME Authorization Certificate v1.0\nLien Portfolio Attestation ($18.2B USD)\nController Authority Documentation\nSovereign Framework Activation Record\nLegal Attestation Bundle (35 USC §284 + 12 USC §3903 + 31 USC §3730)", tooltip: "The list of legal and financial documents that form the collateral pool. The integrity of this entire set is confirmed through a single cryptographic proof (a Merkle Root)." },
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
            React.createElement('strong', { 'data-tooltip': "A process that converts any amount of data into a unique, fixed-size string of characters (a 'hash'). Any change to the original data, however small, will result in a completely different hash." }, 'Cryptographic hash functions'),
            ' create unique ',
            React.createElement('strong', { 'data-tooltip': "Another term for a cryptographic hash. It's a unique identifier for a piece of data, ensuring that the data has not been altered." }, 'digital fingerprints'),
            ' of documents — similar to how ',
            React.createElement('strong', { 'data-tooltip': 'Society for Worldwide Interbank Financial Telecommunication. A secure messaging network used by banks and financial institutions globally to send and receive information, such as money transfer instructions.' }, 'SWIFT'),
            ' uses message authentication codes. Any modification to the source material, even changing a single character, produces a completely different hash. This enables ',
            React.createElement('strong', { 'data-tooltip': "A method that guarantees the detection of any unauthorized change. If the calculated 'fingerprint' of a document matches the recorded one, it is mathematically certain that it has not been altered." }, 'deterministic tamper detection'),
            ' and ensures document authenticity.'
        )
    ),
    inputs: [
      { type: 'textarea', label: "Attestation Data (Pre-Loaded)", id: "attestationData", value: "FLAME Protocol Attestation\nRegistry Reference: PFC-2025-001-7B3A\nAuthorized Signatory: 0xAefd8aa7EcfCFA8041Dc66796A6eF673D108e36b\nTimestamp: 2024-10-28T13:40:00Z\nVerification: All Cryptographic Elements Valid", tooltip: "The raw data containing the core facts of the authorization. This data is converted into a cryptographic hash (a unique fingerprint) to ensure it cannot be tampered with." },
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
            React.createElement('strong', { 'data-tooltip': "The standard electronic transfer of funds from one financial institution to another. The blockchain is used for authorization only, not for the transfer itself." }, 'standard banking wire'),
            ' from your institution to GB Dynamics Inc. The blockchain provides ',
            React.createElement('strong', { 'data-tooltip': 'Mathematical evidence of authenticity and integrity that cannot be forged. It relies on complex algorithms to verify data, similar to how banks verify wire transfers.' }, 'cryptographic proof of authorization'),
            ' (similar to how SWIFT provides message authentication). The blockchain is ',
            React.createElement('strong', null, 'NOT'),
            ' the payment rail — it functions as an independent verification registry only.'
        ),
        React.createElement('p', { style: { marginTop: '12px', lineHeight: 1.7 } },
            React.createElement('strong', null, 'Authorization Status:'),
            ' ',
            React.createElement('span', { 'data-tooltip': 'A transaction or commitment that cannot be cancelled, reversed, or withdrawn once it has been made.' }, 'Irrevocable'),
            ' and ',
            React.createElement('span', { 'data-tooltip': 'Provides proof of the integrity and origin of data, ensuring that the sender cannot later deny having sent the message.' }, 'non-repudiable'),
            ' (similar to irrevocable LC)'
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