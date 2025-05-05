import React, { ReactNode } from 'react';

interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <h2 className="text-3xl font-heading font-bold text-center mb-12 text-primary">
      {children}
    </h2>
  );
};

export default SectionTitle;