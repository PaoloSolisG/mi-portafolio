import React, { useEffect, useRef, useState } from "react";

function SectionFade({ children }) {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(ref.current); // Para que solo se active 1 vez
        }
      },
      { threshold: 0.1 } // cuando 10% esté visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div ref={ref} className={`section-fade ${visible ? "visible" : ""}`}>
      {children}
    </div>
  );
}

export default SectionFade;
