"use client";
import { useEffect, useState } from "react";

export default function TimeButton() {
  const [currentTime, setCurrentTime] = useState<Date>();
  const [clickCount, setClickCount] = useState<number>(0);
  const [renderCount, setRenderCount] = useState<number>(0);

  useEffect(() => {
    // Increment the render count whenever the component re-render
    //It only renders when the component re-render
    setRenderCount((prevState) => prevState + 1);
  }, []);
  const handleClick = () => {
    // Update the state with current time when the button is clicked
    setCurrentTime(new Date());

    // Update the state to increament the click count
    setClickCount((prevState) => prevState + 1);
  };

  return (
    <div className="m-5 bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 relative flex flex-col gap-2 text-center">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">Time Button</h3>
      <p className="absolute top-0 left-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
        2
      </p>

      <h1 className="mt-4  text-gray-800 text-2xl font-bold">
        Time: <strong>{currentTime?.toLocaleTimeString()}</strong>
      </h1>
      <div className="flex justify-between gap-5">
        <span className="bg-black text-white rounded-xl p-2">
          Clicks : {clickCount}
        </span>
        <span className="bg-black text-white rounded-xl p-2">
          Render : {renderCount}
        </span>
      </div>

      <div className="my-4">
        <button
          onClick={handleClick}
          className="mt-4 text-xl w-full text-white bg-indigo-600 p-2 rounded-xl shadow-lg hover:opacity-75"
        >
          Click Me
        </button>
      </div>
    </div>
  );
}
