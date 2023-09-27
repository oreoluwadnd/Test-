"use client";
import { useEffect, useState } from "react";

export default function MaxNumber() {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");

  //onchange handle the logic when the input change and find  input string which appears maximum number of times consecutively.
  //The pattern called freqeuncy counter which is 0(n) it prevent nested loops

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    let input = e.target.value;
    let maxCount = 0;
    let currentChar = "";
    let currentCount = 0;
    let consecutiveChars: string[] = [];

    for (let i = 0; i < input.length; i++) {
      if (input[i] === currentChar) {
        currentCount++;
      } else {
        currentChar = input[i];
        currentCount = 1;
      }

      if (currentCount > maxCount) {
        maxCount = currentCount;
        consecutiveChars = [currentChar];
      } else if (currentCount === maxCount) {
        consecutiveChars.push(currentChar);
      }
    }

    if (maxCount > 1) {
      setResult(`${consecutiveChars.join(",")}: ${maxCount}`);
    } else {
      setResult("No consecutive characters found.");
    }
  };

  return (
    <div className="m-5 bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500 relative flex flex-col gap-2 text-center">
      <h3 className="mb-3 text-xl font-bold text-indigo-600">Max Number</h3>
      <p className="absolute top-0 left-0 bg-yellow-300 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">
        4
      </p>

      <h1 className="mt-4  text-gray-800 text-2xl font-bold">Result</h1>
      <div className="">
        <span className="bg-black text-white rounded-xl p-2">
          Max : {result}
        </span>
      </div>
      <div className="my-4">
        <input
          className="border border-3 w-full h-10 border-black rounded-lg text-black text-lg p-2 "
          value={inputText}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
