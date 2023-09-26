import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';

const Assignment2 = lazy(() => import("../src/Application/Assignment2/index"));
const Assignment1 = lazy(() => import("../src/Application/Assignment1/index"));

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index path="/Assignment2" exact element={<Assignment2 />} />
          <Route path="/" element={<Assignment1 />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
