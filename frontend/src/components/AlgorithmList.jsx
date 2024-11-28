import React from "react";

const AlgorithmList = ({ setAlgorithm }) => {
  const algorithms = ["Bubble Sort", "Quick Sort", "Dijkstra's Algorithm"];

  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <h3 className="text-lg font-semibold mb-2">Choose an Algorithm</h3>
      <div className="flex flex-wrap gap-2">
        {algorithms.map((algo) => (
          <button
            key={algo}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            onClick={() => setAlgorithm(algo)}
          >
            {algo}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AlgorithmList;
