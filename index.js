const {
  bestCaseDataSet,
  worseCaseDataSet,
  normalCaseDataSet,
} = require("./datasets");

const { initialList, shiftedList } = bestCaseDataSet;

/**
 *
 * @param {[]} numArray
 * @param {[]} initList optional, passed the default initialList if none given.
 * Not sure if there will be access to both the lists before the processing ,but since it's available
 * tweaked it a bit
 * @returns
 */
function findLargestIntIn(numArray, initList = initialList) {
  let [max] = numArray;
  const [firstElInInitList] = initList;
  let iterationCount = 0;

  if (max == firstElInInitList) {
    max = numArray[numArray.length - 1];
  } else {
    for (let i = 1; i < numArray.length; i++) {
      const currEl = numArray[i];
      iterationCount++;

      const isGreaterThanMax = currEl - max >= 0;

      if (isGreaterThanMax) {
        max = currEl;
      } else {
        break;
      }
    }
  }
  return { max, iterationCount, itemsCount: numArray.length };
}

console.log(findLargestIntIn(shiftedList));
