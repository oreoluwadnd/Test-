import { useState, useEffect } from "react";

function useBackgroundColorChanger() {
  const [bgColor, setBgColor] = useState("rgb(139, 184, 14)"); // Initial color

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      const g = 30 + Math.round(x * 215); // Adjust the range as needed
      const blur = Math.round(x * 10); // Adjust the blur range
      // Update the background color
      setBgColor(`rgb(0, ${g}, 0)`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return bgColor;
}

export default useBackgroundColorChanger;
