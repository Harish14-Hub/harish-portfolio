import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverOptions {
  threshold?: number;
  rootMargin?: string;
  freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
) {
  const { threshold = 0, rootMargin = '0%', freezeOnceVisible = false } = options;
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const [node, setNode] = useState<Element | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, rootMargin };
    const isObserverDifferent = 
      observer.current?.root !== null ||
      observer.current?.rootMargin !== rootMargin ||
      observer.current?.thresholds[0] !== threshold;

    if (isObserverDifferent) {
      observer.current?.disconnect();
      observer.current = new IntersectionObserver(updateEntry, observerParams);
    }

    observer.current.observe(node);

    return () => observer.current?.disconnect();
  }, [node, threshold, rootMargin, frozen]);

  const ref = (element: Element | null) => setNode(element);

  return { ref, entry, isIntersecting: !!entry?.isIntersecting };
}