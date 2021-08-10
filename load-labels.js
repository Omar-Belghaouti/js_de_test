/**
 * @function loadLabels
 * @description this function loads the labels
 * @param {Array} dataWithTotal - the data with total
 * @returns {Array} labels - the labels
 * @version 0.0.1
 * @author [Omar Belghaouti](https://github.com/Omar-Belghaouti)
 */
const loadLabels = (dataWithTotal) => {
  let labels = dataWithTotal.map((d) => {
    return d.period;
  });

  return labels;
};
export default loadLabels;
