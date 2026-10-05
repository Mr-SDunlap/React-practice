import { useState, useEffect } from "react";

function DigitalClock({ timeZone = "America/New_York", zoneLabel }) {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    return time.toLocaleTimeString("en-US", {
      timeZone: timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  }

  return (
    <>
      <div className="clock-container">
        <label>{zoneLabel}</label>
        <div className="clock">
          <span>{formatTime()}</span>
        </div>
      </div>
    </>
  );
}

export default DigitalClock;
