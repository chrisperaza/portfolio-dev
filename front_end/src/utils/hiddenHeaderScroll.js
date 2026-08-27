import { useState, useEffect, useRef } from 'react';

export function HiddenHeaderScroll() {
  const [isHidden, setIsHidden] = useState(false);

  const isNavRef = useRef(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      if (isNavRef.current) return;

      const currentScrollY = window.scrollY;

      if (currentScrollY < 0) return;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsHidden(true);
      } else if (currentScrollY < lastScrollY) {
        setIsHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', updateScrollDirection);

    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, []);

  // Hide header and block scroll detection temporally
  const handleNavClick = () => {
    setIsHidden(true);
    isNavRef.current = true;

    setTimeout(() => {
      isNavRef.current = false;
    }, 800);
  };

  return { isHidden, handleNavClick };
}
