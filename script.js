// import util functions
import loadData from "./load-data";
import loadLabels from "./load-labels";
import loadGraphValues from "./load-graph-values";

// data array
const data = [
  {
    Cheese: 22.2,
    CHOCOLATE: 10.3,
    Impulse: 1.5,
    period: "2021_26",
  },
  {
    Cheese: 21.8,
    CHOCOLATE: 9.8,
    Impulse: 1.5,
    period: "2021_27",
  },
  {
    Cheese: 21.2,
    CHOCOLATE: 9.7,
    Impulse: 1.4,
    period: "2021_28",
  },
];

/**
 * @function generateGraph
 * @description This function generates the graph.
 * @version 0.0.1
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
const generateGraph = () => {
  // load data with total
  let dataWithTotal = loadData(data);

  // load labels
  let labels = loadLabels(dataWithTotal);

  // load graph values
  let keys = Object.keys(dataWithTotal[0]);
  let graphValues = loadGraphValues(keys, dataWithTotal);

  // display the graph
  let ctx = document.getElementById("myChart").getContext("2d");
  let myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: labels,
      datasets: graphValues,
    },
  });
};

generateGraph();
