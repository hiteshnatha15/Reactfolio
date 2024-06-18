import Data from "./Data";
import Tours from "./components/Tours";
import react, { useState } from "react";

function App() {
  const [tours, setTours] = useState(Data);

  function removeTour(id){
    const newTours = tours.filter((tour)=>tour.id!==id);
    setTours(newTours);
  }

  if(tours.length==0)
    {
      return(
        <div className="container">
          <h2 className="title">No Tours Left</h2>
          <button className="btn-red" onClick={()=>setTours(Data)}>Refresh</button>
        </div>
      )
    }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour} />
    </div>
  );
}

export default App;
