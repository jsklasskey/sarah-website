import React from 'react';

interface ServiceCardProps {
  iconClass: string;
  title: string;
  description: string;
  linkTarget: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ iconClass, title, description, linkTarget }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string): void => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      const sectionPosition = targetSection.offsetTop;
      window.scrollTo({
        top: sectionPosition - navbarHeight,
        behavior: 'smooth'
      });
      
      // Update URL hash without jumping
      history.pushState(null, '', `#${sectionId}`);
    }
  };

  return (
    <div className="bg-light p-8 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out flex flex-col h-full">
      <div className="text-accent text-4xl mb-4">
        <i className={`fas ${iconClass}`}></i>
      </div>
      <h3 className="text-xl font-heading font-semibold mb-3">{title}</h3>
      <p className="mb-4 flex-grow">{description}</p>
      <a
        href={`#${linkTarget}`}
        onClick={(e) => scrollToSection(e, linkTarget)}
        className="text-accent font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded mt-auto inline-flex items-center"
      >
        Learn more <i className="fas fa-arrow-right ml-1 text-sm"></i>
      </a>
    </div>
  );
};

export default ServiceCard;