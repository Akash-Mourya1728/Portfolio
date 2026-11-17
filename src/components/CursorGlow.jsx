
import React, { useEffect, useState } from "react";

const CursorGlow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateDevice = () => {
      setIsDesktop(mediaQuery.matches);
    };

    updateDevice();

    mediaQuery.addEventListener("change", updateDevice);

    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    if (mediaQuery.matches) {
      window.addEventListener("mousemove", moveCursor);
    }

    return () => {
      mediaQuery.removeEventListener("change", updateDevice);
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <div
      className="fixed top-0 left-0 w-72 h-72
      bg-purple-500 rounded-full blur-[120px]
      opacity-20 pointer-events-none z-0"
      style={{
        transform: `translate(${position.x - 150}px, ${position.y - 150}px)`,
      }}
    />
  );
};

export default CursorGlow;
