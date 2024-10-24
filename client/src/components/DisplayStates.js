import React, { useState, useEffect } from "react";

function DisplayStates() {
  const [states, setStates] = useState([]);

  useEffect(() => {
    fetch("/states")
      .then((response) => response.json())
      .then((data) => setStates(data));
  }, []);

  const mappedStates = states.map((state) => {
    return <option key={state.id}>{state.name}</option>;
  });

  return (
    <div>
      <select>{mappedStates}</select>
    </div>
  );
}

export default DisplayStates;
