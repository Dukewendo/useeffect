import "./App.css";
import React from "react";

function App() {
  const [starWarsData, setStarWarsData] = React.useState({});

  const [count, setCount] = React.useState(0);

  console.log("render");

  React.useEffect(() => {
    console.log("Effect function ran");
  }, [count]);

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Add
      </button>
    </div>
  );
}

export default App;
