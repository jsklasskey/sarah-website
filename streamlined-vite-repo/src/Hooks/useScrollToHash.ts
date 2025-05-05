import { useEffect } from 'react';

export function useScrollToHash(): void {
  useEffect(() => {
    // Handle initial hash in URL
    const handleInitialHash = (): void => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          setTimeout(() => {
            const navbarHeight = document.querySelector('nav')?.offsetHeight || 0;
            const elementPosition = element.offsetTop;
            window.scrollTo({
              top: elementPosition - navbarHeight,
              behavior: 'smooth'
            });
          }, 100);
        }
      }
    };

    // Run once on mount
    handleInitialHash();
  }, []);
}