import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = (): void => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string): void => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      const sectionPosition = section.offsetTop;
      window.scrollTo({
        top: sectionPosition - navbarHeight,
        behavior: 'smooth'
      });
      
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      
      // Update URL hash without jumping
      history.pushState(null, '', `#${sectionId}`);
    }
  };

  const navLinks = [
    { href: 'home', text: 'Home' },
    { href: 'about', text: 'About' },
    { href: 'services-detail', text: 'Services' },
    { href: 'approach', text: 'My Approach' },
    { href: 'faq', text: 'FAQ' },
    { href: 'contact', text: 'Contact' },
  ];

  return (
    <nav className={`bg-white py-4 sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => scrollToSection(e, 'home')} 
          className="text-2xl font-heading font-semibold text-primary"
        >
          Sarah Kalasky, LPC
        </a>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => scrollToSection(e, link.href)}
              className="nav-link text-dark hover:text-accent transition"
            >
              {link.text}
            </a>
          ))}
        </div>

        <button
          className="md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl text-primary`}></i>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`md:hidden bg-white shadow-lg absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="container mx-auto px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => scrollToSection(e, link.href)}
              className="block text-dark hover:text-accent transition py-2 text-center"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;