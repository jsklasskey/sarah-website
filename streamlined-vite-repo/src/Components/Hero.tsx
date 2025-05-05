import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
      const sectionPosition = contactSection.offsetTop;
      window.scrollTo({
        top: sectionPosition - navbarHeight,
        behavior: 'smooth'
      });
      
      // Update URL hash without jumping
      history.pushState(null, '', '#contact');
    }
  };

  return (
    <section id="home" className="hero-image text-white py-20 md:py-32">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Emotional Healing Through Connection
          </h1>
          <h2 className="text-xl md:text-2xl font-light mb-8">
            Emotion-Focused Therapy for Anxiety, Depression & Relationship Growth
          </h2>
          <p className="text-lg mb-8">
            I'm Sarah Kalasky, a Licensed Professional Counselor specializing in helping adults and teens navigate emotional challenges, heal from past wounds, and build more fulfilling relationships through Emotion-Focused Therapy.
          </p>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="inline-block bg-accent hover:bg-opacity-90 text-white font-semibold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Book a Free Consultation
          </a>
        </div>

        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="bg-white p-2 rounded-full shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=320&h=320&q=80"
              alt="Professional headshot of Sarah Kalasky, LPC"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover"
              width="320"
              height="320"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;