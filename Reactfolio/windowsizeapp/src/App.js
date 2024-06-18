import "./App.css";
import { useEffect, useState } from "react";
function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    console.log(width, height),
    (
      <div>
        <h1>Window Size App</h1>
        <h3>
          The size of your window is:{width}x{height}
        </h3>
      </div>
    )
  );
}

export default App;
