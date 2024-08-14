// components/Cursor/Cursor.js
import { useRef, useEffect } from "react";

const Cursor = ({ showCursor, cursorPosition }) => {
  const cursorRef = useRef();

  useEffect(() => {
    if (showCursor) {
      cursorRef.current.style.top = `${cursorPosition.y}px`;
      cursorRef.current.style.left = `${cursorPosition.x}px`;
    }
  }, [cursorPosition, showCursor]);

  return (
    <div
      ref={cursorRef}
      className={`w-12 h-12 flex items-center justify-center bg-white rounded-full fixed z-[999] transform pointer-events-none -translate-x-1/2 -translate-y-1/2 ${
        showCursor ? "block" : "hidden"
      }`}
    >
      <h1 className="text-black">Drag</h1>
    </div>
  );
};

export default Cursor;
