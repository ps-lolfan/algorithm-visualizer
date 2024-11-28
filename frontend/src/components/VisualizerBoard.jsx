import React from "react";

const VisualizerBoard = ({ algorithm, inputData }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-md">
      <h4 className="text-lg font-semibold">
        Algorithm: {algorithm || "None Selected"}
      </h4>
      <div className="flex justify-center mt-4 gap-1">
        {inputData.length
          ? inputData.map((item, idx) => (
              <div
                key={idx}
                style={{ height: `${item * 5}px` }}
                className="w-4 bg-blue-500"
              ></div>
            ))
          : "No data to visualize."}
      </div>
    </div>
  );
};

export default VisualizerBoard;