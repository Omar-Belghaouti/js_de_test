/**
 * @function loadData
 * @description this function is used to load the data from the server.
 * @param {Array} data - the data to be loaded.
 * @return {Array} dataWithTotal - the data with total count.
 * @version 0.0.1
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
const loadData = (data) => {
  let dataWithTotal = [];
  data.forEach((d) => {
    let total = 0;
    for (let prop in d) {
      if (prop !== "period") {
        total += d[prop];
      }
    }
    dataWithTotal.push({
      period: d.period,
      total: total / data.length,
    });
  });

  return dataWithTotal;
};

export default loadData;
