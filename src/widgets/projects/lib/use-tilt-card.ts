import { useState, useRef, useEffect } from 'react';

export const useTiltCard = () => {
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const onOpen = () => {
    setClosing(false);
    setOpen(true);
  };

  const onClose = () => {
    setClosing(true);

    timerRef.current = setTimeout(() => {
      setOpen(false);
    }, 300);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    onOpen();

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 1;
    const rotateX = ((centerY - y) / centerY) * 1;

    requestAnimationFrame(() => {
      card.style.transform = `
        perspective(300px)
        rotateY(${rotateY}deg)
        rotateX(${rotateX}deg)
      `;
    });
  };

  const handleMouseLeave = () => {
    onClose();

    requestAnimationFrame(() => {
      if (cardRef.current) {
        cardRef.current.style.transform = `
        perspective(300px)
        rotateY(0deg)
        rotateX(0deg)
      `;
      }
    });
  };

  useEffect(
    () => () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    },
    []
  );

  return {
    open,
    closing,
    cardRef,
    setClosing,
    handleMouseMove,
    handleMouseLeave,
  };
};
