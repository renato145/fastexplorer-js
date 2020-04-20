import { useRef, useEffect, useState, useMemo } from 'react';
import { ResizeObserver } from '@juggle/resize-observer';

export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

export const useDimensions = () => {
  const ref = useRef();
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const ro = useMemo(
    () =>
      new ResizeObserver((entries) => {
        const entry = entries[0];
        setWidth(entry.contentRect.width);
        setHeight(entry.contentRect.height);
      }),
    []
  );

  useEffect(() => {
    const element = ref.current;
    if (element) ro.observe(element);
    return () => ro.unobserve(element);
  }, [ro]);

  return { ref, width, height };
};

// export function useMeasure() {
//   const ref = useRef()
//   const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
//   const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)))
//   useEffect(() => {
//     if (ref.current) ro.observe(ref.current)
//     return () => ro.disconnect()
//   }, [])
//   return [{ ref }, bounds]
// }
