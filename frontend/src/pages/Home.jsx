import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-blue-500 to-indigo-700 text-white">
      <h1 className="text-4xl text-red-500 font-bold mb-4">Algorithm Visualizer</h1>
      <p className="text-lg mb-6">Learn algorithms visually and interactively!</p>
      <button
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-100"
        onClick={() => navigate("/visualizer")}
      >
        Start Learning
      </button>
    </div>
  );
};

export default Home;
