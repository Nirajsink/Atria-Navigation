import React, { useEffect, useState } from "react";
import "./index.css";
import directionsData from "./directions";

function App() {
  const [currentLocation, setCurrentLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [steps, setSteps] = useState([]);

  // Read from QR (URL) on page load
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const loc = urlParams.get("location");
    if (loc) {
      setCurrentLocation(decodeURIComponent(loc));
    }
  }, []);

  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "en-US";
    synth.cancel();
    synth.speak(utter);
  };

  const getDirections = () => {
    setSteps([]);
    if (!currentLocation || !destination) return;

    const directionList = directionsData[currentLocation]?.[destination];
    if (!directionList) {
      setSteps([{ icon: "fa-exclamation-circle", text: "No directions available." }]);
      return;
    }

    setSteps(directionList);

    let speech = `Starting from ${currentLocation} to ${destination}. `;
    directionList.forEach(step => speech += step.text + ". ");
    speak(speech);
  };

  return (
    <div className="container">
      <h1>📍 Smart QR Campus Navigator</h1>

      <div className="popup">
        {currentLocation
          ? `📌 You are at: ${currentLocation}`
          : "⚠️ Please scan QR to detect your location."}
      </div>

      <div className="selector">
        <label>🎯 Where do you want to go?</label>
        <select value={destination} onChange={e => setDestination(e.target.value)}>
          <option value="">--Select Destination--</option>
          <option value="CSE HOD Cabin">CSE HOD Cabin</option>
          <option value="Seminar Hall">Seminar Hall</option>
          <option value="MBA Department">MBA Department</option>
        </select>
        <button onClick={getDirections}>Get Directions</button>
      </div>

      <div className="output">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <i className={`fas ${step.icon}`}></i>
            {step.text}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
