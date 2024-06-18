import React, { useEffect, useState } from "react";
import { filterData, apiUrl } from "./data";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
function App() {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cetegory,setCetegory]=useState(filterData[0].title);
  async function getData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <Filter key={filterData.id} filterData={filterData} cetegory={cetegory} setCetegory={setCetegory}></Filter>
      {loading ? <p>Loading...</p> : <Cards courses={courses} cetegory={cetegory}></Cards>}
    </div>
  );
}

export default App;
