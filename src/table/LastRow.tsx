import { useState, useRef, useEffect } from 'react';
import { SpinnerComponent } from './SpinnerComponent';

type LastRowProps = {
  containerRef: React.RefObject<HTMLElement>;
  onVisible: () => void;
  rowNode: React.ReactNode;
  loading?: boolean;
};

export const LastRow = ({ containerRef, onVisible, rowNode, loading }: LastRowProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting && !visible) {
      setVisible(true);
      onVisible?.();
    }

    if (!entries[0].isIntersecting && visible) {
      setVisible(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      root: containerRef?.current,
      threshold: [0, 1.0],
    });

    if (containerRef.current && ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [containerRef, visible]);

  return <div ref={ref}>{loading ? <SpinnerComponent /> : rowNode}</div>;
};
