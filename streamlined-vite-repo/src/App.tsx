import React, { useEffect } from 'react';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import SectionTitle from './Components/SectionTitle';
import ServiceCard from './Components/ServiceCard';
import InfoSection from './Components/InfoSection';
import ContactForm from './Components/ContactForm';
import { ThemeProvider } from './Context/ThemeContext';
import { useScrollToHash } from './Hooks/useScrollToHash';
import { useScrollAnimation } from './Hooks/useScrollAnimation';
import { useAnalytics } from './Hooks/useAnalytics';

interface Service {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const App: React.FC = () => {
  // Use custom hooks
  useScrollToHash();
  useScrollAnimation();
  const { trackEvent } = useAnalytics();

  // Track page load
  useEffect(() => {
    trackEvent('Page', 'Load', 'Initial');
  }, [trackEvent]);

  const services: Service[] = [
    { 
      icon: 'fa-heart', 
      title: 'Individual Therapy', 
      description: 'For adults and teens struggling with anxiety, depression, or emotional wounds that impact daily life and relationships.', 
      link: 'services-detail' 
    },
    { 
      icon: 'fa-people-arrows', 
      title: 'Couples Counseling', 
      description: 'Helping partners break negative cycles, deepen emotional connection, and build secure, loving relationships.', 
      link: 'services-detail' 
    },
    { 
      icon: 'fa-seedling', 
      title: 'Life Transitions', 
      description: 'Support during major life changes—career shifts, loss, parenthood, or identity exploration—with emotional awareness.', 
      link: 'services-detail' 
    },
  ];

  return (
    <ThemeProvider>
      <Navbar />

      <main>
        <Hero />

        <InfoSection id="services-highlights" bgColor="bg-white">
          <div className="scroll-animate">
            <SectionTitle>How I Can Help You</SectionTitle>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {services.map((service, index) => (
                <div key={service.title} className="scroll-animate" style={{ transitionDelay: `${index * 150}ms` }}>
                  <ServiceCard
                    iconClass={service.icon}
                    title={service.title}
                    description={service.description}
                    linkTarget={service.link}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfoSection>

        <InfoSection id="contact" bgColor="bg-light">
          <div className="scroll-animate">
            <SectionTitle>Contact Me</SectionTitle>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 max-w-5xl mx-auto">
              <div className="md:w-1/2 scroll-animate" style={{ transitionDelay: '150ms' }}>
                <h3 className="text-xl font-heading font-semibold mb-4">Get in Touch</h3>
                <p className="mb-6">
                  Taking the first step toward therapy can feel vulnerable. I honor your courage in reaching out. Whether you're ready to schedule a free 15-minute consultation or just have questions, I'm here to help. Please use the form or contact me directly.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="text-accent text-xl w-6 text-center mr-3 mt-1 shrink-0">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p>Serving Holly, MI & surrounding areas.</p>
                      <p>Secure online therapy available throughout Michigan.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-accent text-xl w-6 text-center mr-3 mt-1 shrink-0">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p><a href="tel:248-206-5740" className="hover:text-accent">(248) 206-5740</a></p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-accent text-xl w-6 text-center mr-3 mt-1 shrink-0">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p><a href="mailto:sarahkalasky@skalaskylpc.com" className="hover:text-accent break-all">sarahkalasky@skalaskylpc.com</a></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 scroll-animate" style={{ transitionDelay: '300ms' }}>
                <ContactForm />
              </div>
            </div>
          </div>
        </InfoSection>
      </main>

      <footer className="bg-dark text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Sarah Kalasky, LPC. All rights reserved.</p>
        </div>
      </footer>
    </ThemeProvider>
  );
};

export default App;