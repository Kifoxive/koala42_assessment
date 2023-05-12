import React from "react";

import { Routes, Route } from "react-router";

import { Home } from "./pages";
import Header from "./@components/Header";
import Footer from "./@components/Footer";

const App: React.FC = () => {
  return (
    <div className="App flex justify-center w-full bg-black">
      <div className="flex flex-col items-center w-full min-h-[100vh]">
        <Header />
        <main className="flex-1 w-full flex justify-center max-w-[1500px]">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
