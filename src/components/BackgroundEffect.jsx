import React, { useRef, useEffect } from "react";

const Cursor = () => {
  const ref = useRef();

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
  }, []);

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const divWidth = ref.current.offsetWidth;
    const divHeight = ref.current.offsetHeight;
    ref.current.style.left = clientX - divWidth / 2 + "px";
    ref.current.style.top = clientY - divHeight / 2 + "px";
  };

  return (
    <div
      ref={ref}
      className="hole fixed duration-700 ease-out w-[calc(100%*3)] h-[calc(100%*3)] cursor rounded-full bg-black"
    >
    </div>
  );
};

export default Cursor;
