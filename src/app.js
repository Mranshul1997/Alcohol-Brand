import React from "react";
import ImageSlider from "./ImageSlider.jsx";
import Biraaa from "./Components/Biraaa.js";
import Morgan from "./Components/Morgan.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ImageSlider />} />
          <Route path="/Biraaa" element={<Biraaa />} />
          <Route path="/Morgan" element={<Morgan />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
