import { useEffect, useRef } from 'react';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

type MagniteType = {
  powerDistance: number;
  width: number;
  height: number;
  x: number;
  y: number;
  diagonal: number;
  magneticArea: number;
};

export const useMagniteBtn = (activeMagnite: boolean) => {
  const btnRef = useRef<HTMLElement>(null);
  const animationRef = useRef<number | null>(null);

  const magniteInit = () => {
    const powerDistance = 30;

    const boundingRect = btnRef.current?.getBoundingClientRect();

    if (!boundingRect) return;

    const magnet: MagniteType = {
      powerDistance,
      width: boundingRect?.width || 0,
      height: boundingRect?.height || 0,
      x: 0,
      y: 0,
      diagonal: 0,
      magneticArea: 0,
    };

    const smoother = ScrollSmoother.get();
    const scrollY = smoother ? smoother.scrollTop() : window.pageYOffset;

    magnet.x = boundingRect.left + magnet.width / 2;
    magnet.y = boundingRect.top + scrollY + magnet.height / 2;
    magnet.diagonal = Math.sqrt(magnet.width ** 2 + magnet.height ** 2);
    magnet.magneticArea = (magnet.diagonal + magnet.powerDistance) / 2;

    return magnet;
  };

  useEffect(() => {
    if (!btnRef.current) return;

    const magnet = magniteInit();
    if (!magnet) return;

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };

    const smoothFollow = () => {
      current.x += (target.x - current.x) * 0.15;
      current.y += (target.y - current.y) * 0.15;

      btnRef.current!.style.transform = `translate3d(${current.x}px, ${current.y}px, 0)`;

      animationRef.current = requestAnimationFrame(smoothFollow);
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!activeMagnite) return;

      const smoother = ScrollSmoother.get();
      const scrollY = smoother ? smoother.scrollTop() : window.pageYOffset;

      const rect = btnRef.current!.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + scrollY + rect.height / 2;

      const dx = event.pageX - centerX;
      const dy = event.pageY - centerY;
      const distance = Math.sqrt(dx ** 2 + dy ** 2);

      const diagonal = Math.sqrt(rect.width ** 2 + rect.height ** 2);
      const magneticArea = (diagonal + 30) / 2;

      if (distance < magneticArea) {
        const percent = 1 - distance / magneticArea;
        target.x = dx * percent;
        target.y = dy * percent;
      } else {
        target.x = 0;
        target.y = 0;
      }
    };
    // Запускаем плавную анимацию
    animationRef.current = requestAnimationFrame(smoothFollow);
    window.addEventListener('mousemove', handleMouseMove);

    // 🧹 Чистим всё при размонтировании
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [activeMagnite]);

  return {
    btnRef,
  };
};
