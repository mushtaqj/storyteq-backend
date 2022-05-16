const {
  normalCaseDataSet,
  shiftedInAscendingOrder,
  shiftedInDescendingOrder,
  normalCaseDataSetWithSlicePointInBeginning,
  normalCaseDataSetWithSlicePointInEnd,
} = require("./datasets");

const { shiftedList } = normalCaseDataSet;

/**
 * What conclusions can we arrive at when :
 * 1. Last > First =  The Array DEFINETELY is in Ascending order
 * 2. First > Last =  The Array is in descending order, but can also be shifted in the middle
 * @param {[]} shiftedNumArray
 * @returns
 */
function findLargestIntIn(shiftedNumArray) {
  let [max] = shiftedNumArray;
  let numOfIterations = 0;
  let lastDiff, difference;
  const { length } = shiftedNumArray;

  for (let i = 0, j = length - 1; i < length / 2; i++, j--) {
    numOfIterations++;
    const first = shiftedNumArray[i];
    const last = shiftedNumArray[j];

    lastDiff = difference;
    difference = first - last;

    if (difference < 0 && lastDiff < difference) {
      // Ascending - lastDiff will be ALWAYS lesser than diff
      max = last;
      break;
    } else if (difference > 0 && lastDiff > difference) {
      // Descending - lastDiff will be ALWAYS greater than diff
      max = first;
      break;
    } else if (difference > 0 && lastDiff > 0) {
      // Mixed - lastDiff will be always lesser than diff till we reach the slice point
      max = Math.max(max, first, last);
    } else if (lastDiff !== undefined) {
      max = Math.max(max, first, last);
      break;
    }

    // console.log({ max, first, last, diff: difference, lastDiff });
  }

  return { max, numOfIterations };
}

console.log(findLargestIntIn(shiftedList));
