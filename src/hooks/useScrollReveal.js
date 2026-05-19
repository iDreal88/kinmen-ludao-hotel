import { useEffect } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    // Check if IntersectionObserver is supported (for older browsers)
    if (!window.IntersectionObserver) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            // Optional: stop observing once revealed to only animate once
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15, // Trigger when 15% of the element is visible
        rootMargin: '0px 0px -50px 0px', // Trigger slightly before it hits the viewport
      }
    );

    // Select all elements with the reveal-up class
    const elements = document.querySelectorAll('.reveal-up');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
};
