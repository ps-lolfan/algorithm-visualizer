import React, { useState } from "react";
import AlgorithmList from "../components/AlgorithmList";
import VisualizerBoard from "../components/VisualizerBoard";
import Controls from "../components/Controls";

const Visualizer = () => {
  const [algorithm, setAlgorithm] = useState("");
  const [inputData, setInputData] = useState([]);

  return (
    <div className="h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4">
        <h2 className="text-center text-2xl font-bold">Visualizer</h2>
      </header>
      <main className="p-4 flex flex-col gap-4">
        <AlgorithmList setAlgorithm={setAlgorithm} />
        <VisualizerBoard algorithm={algorithm} inputData={inputData} />
        <Controls setInputData={setInputData} />
      </main>
    </div>
  );
};

export default Visualizer;
