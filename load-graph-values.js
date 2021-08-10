/**
 * @function loadGraphValues
 * @description this is a function that loads the graph values from the database
 * @param {Array} keys - the keys of the graph
 * @param {Array} dataWithTotal - the data with total
 * @returns {Array} graphValues - the graph values
 * @version 0.0.1
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
const loadGraphValue = (keys, dataWithTotal) => {
  let graphValues = [];
  keys.forEach((key) => {
    if (key !== "period") {
      var temp = {
        label: keys[i],
        data: [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
      };
      temp.data = dataWithTotal.map((d) => {
        return d.key;
      });
      graphValues.push(temp);
    }
  });
  return graphValues;
};
export default loadGraphValue;
