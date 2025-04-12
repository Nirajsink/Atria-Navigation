import React, { useEffect, useState } from "react";
import "./index.css";
import directionsData from "./directions";
import QRCode from "qrcode.react";

function App() {
  const [currentLocation, setCurrentLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [steps, setSteps] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);

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
    
    setIsSpeaking(true);
    utter.onend = () => setIsSpeaking(false);
    
    synth.speak(utter);
  };

  const getDirections = () => {
    setSteps([]);
    if (!currentLocation || !destination) {
      setSteps([{ icon: "fa-exclamation-triangle", text: "Please select both your location and destination." }]);
      return;
    }

    if (currentLocation === destination) {
      setSteps([{ icon: "fa-info-circle", text: "You are already at this location." }]);
      return;
    }

    const directionList = directionsData[currentLocation]?.[destination];
    if (!directionList) {
      setSteps([{ icon: "fa-exclamation-circle", text: "No directions available for this route." }]);
      return;
    }

    setSteps(directionList);

    let speech = `Starting from ${currentLocation} to ${destination}. `;
    directionList.forEach(step => speech += step.text + ". ");
    speak(speech);
  };

  // Construct QR URL based on current location
  const qrUrl = `https://nirajsink.github.io/Atria-Navigation/?location=${encodeURIComponent(currentLocation)}`;

  // Get available destinations from directions data
  const availableDestinations = Object.keys(directionsData).filter(loc => loc !== currentLocation);

  return (
    <div className="container">
      <h1>
        <i className="fas fa-map-marked-alt"></i> Smart QR Campus Navigator
      </h1>

      <div className={`popup ${!currentLocation ? 'warning' : ''}`}>
        {currentLocation
          ? <><i className="fas fa-map-marker-alt"></i> You are at: <strong>{currentLocation}</strong></>
          : <><i className="fas fa-exclamation-triangle"></i> Please scan a QR code to detect your location.</>}
      </div>

      {currentLocation && (
        <div className="qr-container">
          <h3><i className="fas fa-qrcode"></i> Share this location</h3>
          <QRCode value={qrUrl} size={180} level="H" renderAs="svg" includeMargin={true} />
          <div className="qr-url">{qrUrl}</div>
        </div>
      )}

      <div className="selector">
        <label><i className="fas fa-location-arrow"></i> Where do you want to go?</label>
        <select value={destination} onChange={e => setDestination(e.target.value)}>
          <option value="">--Select Destination--</option>
          {availableDestinations.map(dest => (
            <option key={dest} value={dest}>{dest}</option>
          ))}
          {!currentLocation && Object.keys(directionsData).map(loc => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>
        <button onClick={getDirections} disabled={isSpeaking}>
          {isSpeaking ? (
            <><i className="fas fa-volume-up fa-pulse"></i> Speaking...</>
          ) : (
            <><i className="fas fa-directions"></i> Get Directions</>
          )}
        </button>
      </div>

      {steps.length > 0 && (
        <div className="output">
          <h3><i className="fas fa-route"></i> Directions:</h3>
          {steps.map((step, index) => (
            <div className="step" key={index}>
              <i className={`fas ${step.icon}`}></i>
              <span>{step.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
