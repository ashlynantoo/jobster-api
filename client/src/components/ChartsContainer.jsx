import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/ChartsContainer";
import { BarChart, AreaChart } from "../components";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApplications: data } = useLoaderData();

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button
        type="button"
        onClick={() => {
          setBarChart(!barChart);
        }}
      >
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};

export default ChartsContainer;
