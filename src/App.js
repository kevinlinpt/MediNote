import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Summary from './pages/Summary/Summary';
import Notes from './pages/Notes/Notes';
import Header from './components/Header/Header'

import React, { useState, useEffect } from "react";
import axios from "axios";


function App() {

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Summary />} />
        <Route path="/notesId" element={<Notes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
