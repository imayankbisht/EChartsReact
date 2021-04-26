import React, { useState, useEffect } from "react";
import BarChart from "./components/Barchart";
import ScatterChart from "./components/ScatterChart";
import { csv } from "d3";

const App = () => {
  const [data, setData] = useState([]);

  //fetching data from csv file
  useEffect(() => {
    csv("./wine.csv").then((data) => {
      setData(data);
    });
  }, []);

  return (
    <>
      <ScatterChart data={data} />
      <BarChart data={data} />
    </>
  );
};
export default App;
