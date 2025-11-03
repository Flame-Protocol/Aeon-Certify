// Fix: Add React import for React.ReactNode type.
import React from 'react';

export interface InputDetail {
  type: 'input' | 'textarea';
  label: string;
  id: string;
  value: string;
  isMono?: boolean;
  isBold?: boolean;
  color?: string;
  termTranslation?: string;
}

export interface VerificationModuleData {
  id: number;
  moduleNumber: number;
  title: string;
  bankingEquivalent: string;
  bankingContext: string;
  explanation: React.ReactNode;
  inputs: InputDetail[];
  buttons: {
    type: 'verify' | 'validate';
    text: string;
    action: string; // Could be an alert message or a URL
  }[];
}

// Fix: Add missing types for VerificationSection.tsx
export interface VerificationDetail {
  label: string;
  value: string;
  isLink?: boolean;
  linkPrefix?: string;
  isMono?: boolean;
  truncate?: boolean;
}

// Fix: Add missing types for VerificationSection.tsx
export interface VerificationSectionData {
  bankFriendlyTitle: string;
  technicalTitle: string;
  status: string;
  statusTheme: 'green' | 'blue';
  description: string;
  details: VerificationDetail[];
}
