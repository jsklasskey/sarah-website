import { useEffect } from 'react';

export function useScrollAnimation(): void {
  useEffect(() => {
    const animateOnScroll = (): void => {
      const elements = document.querySelectorAll('.scroll-animate');
      
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight * 0.9) {
          element.classList.add('scroll-animated');
        }
      });
    };
    
    // Run once on mount
    setTimeout(() => {
      animateOnScroll();
    }, 100);
    
    // Add scroll listener
    window.addEventListener('scroll', animateOnScroll);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);
}