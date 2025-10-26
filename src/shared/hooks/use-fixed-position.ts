import { useEffect } from 'react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
export const useFixedPosition = (fixed: boolean) => {
  useEffect(() => {
    const smoother = ScrollSmoother.get();
    if (fixed) {
      smoother?.paused(true);
      document.body.style.overflowY = 'hidden';

      if (!document.body.hasAttribute('data-body-scroll-fix')) {
        document.body.setAttribute('data-body-scroll-fix', 'true');
      }
    } else {
      smoother?.paused(false);
      if (document.body.hasAttribute('data-body-scroll-fix')) {
        document.body.removeAttribute('data-body-scroll-fix');
      }
    }

    return () => {
      smoother?.paused(false);
    };
  }, [fixed]);
};
