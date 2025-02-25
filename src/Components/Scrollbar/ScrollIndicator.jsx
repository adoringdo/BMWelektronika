import { useEffect, useState } from "react";

export default function ScrollIndicator() {
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollTop / scrollHeight) * 100;

      setScrollY(scrollPercentage);
      setVisible(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => setVisible(false), 1000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed", // Ensures it stays in place
        right: "5px",
        top: `${10 + scrollY * 0.8}vh`,
        width: "6px",
        height: "70px",
        background: "rgba(161, 25, 11, .7)", // Slightly more visible
        borderRadius: "3px",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease-in-out",
        zIndex: 9999, // Ensures it's above everything
        pointerEvents: "none", // Prevents interference with other elements
      }}
    />
  );
}
