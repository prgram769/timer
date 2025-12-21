"use client";

import { useState } from "react";

function NumberInput() {
  const [change, setChange] = useState(0);
  const [isInit, setInit] = useState(false);

  let counter = change * 60;

  function initCounter() {
    setInit(true);

    setInterval(() => {
      counter--;

      setChange(counter);

      console.log(counter);
    }, 1000);
  }

  return (
    <>
      <h1 className="font-bold pr-3">Minutes:</h1>
      <input
        type="number"
        onChange={(e) => {
          setChange(e.target.value);
        }}
        className="bg-amber-200 rounded-4xl py-1 w-20 text-black text-center [appearance:textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none]"
      />
      <h1 className="bg-amber-300 text-black rounded-4xl px-2 py-1 m-3 text-center">
        {change}
      </h1>
      <button
        type="button"
        onClick={initCounter}
        className="mr-3 border-[2] border-amber-300 rounded"
      >
        <svg viewBox="0 0 24 24" className="h-10 w-10" fill="#F5D97F">
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M10 16.5l6-4.5-6-4.5zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        </svg>
      </button>
      <button type="button" className="border-[2] border-amber-300 rounded">
        <svg
          className="h-10 w-10"
          height="24px"
          viewBox="0 0 24 24"
          fill="#F5D97F"
        >
          <g>
            <rect fill="none" />
            <rect fill="none" />
            <rect fill="none" />
          </g>
          <g>
            <g />
            <path d="M12,5V1L7,6l5,5V7c3.31,0,6,2.69,6,6s-2.69,6-6,6s-6-2.69-6-6H4c0,4.42,3.58,8,8,8s8-3.58,8-8S16.42,5,12,5z" />
          </g>
        </svg>
      </button>
    </>
  );
}

export { NumberInput };
