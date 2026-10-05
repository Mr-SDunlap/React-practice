import "./app.css";

import DigitalClock from "./DigitalClock";

function App() {
  return (
    <>
      <div className="clocks">
        <DigitalClock timeZone="America/Los_Angeles" zoneLabel="Pacific" />
        <DigitalClock timeZone="America/Denver" zoneLabel="Mountain" />
        <DigitalClock timeZone="America/Chicago" zoneLabel="Central" />
        <DigitalClock timeZone="America/New_York" zoneLabel="Eastern" />
      </div>
    </>
  );
}

export default App;
