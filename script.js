// data array
let data = [
  {
    Cheese: 22.2,
    CHOCOLATE: 10.3,
    Impulse: 1.5,
    period: "2021_26"
  },
  {
    Cheese: 21.8,
    CHOCOLATE: 9.8,
    Impulse: 1.5,
    period: "2021_27"
  },
  {
    Cheese: 21.2,
    CHOCOLATE: 9.7,
    Impulse: 1.4,
    period: "2021_28"
  }
];

/**
 * @function generateGraph
 * @description This function generates the graph.
 */
const generateGraph = () => {
  let dataWithTotal = [];
  
  data.forEach(d => {
    let total = 0;
    for (let prop in d) {
      if (prop !== "period") {
        total += d[prop];
      }
    }
    dataWithTotal.push({
      period: d.period,
      total: total / data.length
    });
   });
  
  let labels = [];

  dataWithTotal.forEach(d => {
    labels.push(d.period);
  });
  
  let graphValues = [];
  let keys = Object.keys(dataWithTotal[0]);

  keys.forEach(key => {
    if (key !== "period") {
      var temp = {
        label: keys[i],
        data: [],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)'
        ],
      };
      dataWithTotal.forEach(d => {
        temp.data.push(d[key]);
        });
      graphValues.push(temp);
    }
  });
  
  let ctx = document.getElementById('myChart').getContext('2d');
  let myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: graphValues
    }
  });
}

generateGraph();