import { useState, useEffect, useRef } from "react";

const useIntersectionObserver = (options) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // console.log("entry", entry);
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [options]);

  return [observerRef, isIntersecting];
};

export default useIntersectionObserver;
