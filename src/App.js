import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Summary from "./pages/Summary/Summary";
import Notes from "./pages/Notes/Notes";

function App() {
  const [tsData, settsData] = useState("");
  const [patientId, setpatientId] = useState(null)
  useEffect(() => {
    axios
      .get("http://localhost:8080")
      .then((res) => {
        settsData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080")
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  // console.log(tsData)
  // console.log(patientId)
if (patientId != null) {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Summary />} />
        <Route path="/notesId" element={<Notes tsData = {tsData} patientId={patientId} />} />
      </Routes>
    </BrowserRouter>
  );
}
}

export default App;
