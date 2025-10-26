import { Ref, useRef, useState, useEffect } from 'react';

export function useDomRefWithSetter<T extends HTMLElement>(): [
  T | null,
  Ref<T>
] {
  const ref = useRef<T>(null);
  const [DOMRef, setDOMRef] = useState<T | null>(null);

  useEffect(() => {
    if (ref.current) {
      setDOMRef(ref.current);
    }
  }, []);

  return [DOMRef, ref];
}
