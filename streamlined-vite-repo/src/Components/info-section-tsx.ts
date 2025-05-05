import React, { ReactNode } from 'react';

interface InfoSectionProps {
  id: string;
  bgColor?: string;
  children: ReactNode;
}

const InfoSection: React.FC<InfoSectionProps> = ({ id, bgColor = 'bg-white', children }) => {
  return (
    <section id={id} className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-6 max-w-6xl">
        {children}
      </div>
    </section>
  );
};

export default InfoSection;