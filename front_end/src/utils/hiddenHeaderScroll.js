import { useState, useEffect } from 'react';

export function HiddenHeaderScroll() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;

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

  return isHidden;
}
