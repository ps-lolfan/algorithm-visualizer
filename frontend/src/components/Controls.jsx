import React from "react";

const Controls = ({ setInputData }) => {
  const generateRandomData = () => {
    const data = Array.from({ length: 10 }, () => Math.floor(Math.random() * 50 + 1));
    setInputData(data);
  };

  return (
    <div className="bg-white shadow-md p-4 rounded-md flex gap-2">
      <button
        onClick={generateRandomData}
        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
      >
        Generate Data
      </button>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Start
      </button>
      <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600">
        Pause
      </button>
      <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">
        Reset
      </button>
    </div>
  );
};

export default Controls;
