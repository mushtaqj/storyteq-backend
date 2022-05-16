// Sample 2
const initialList = [2, 4, 6, 8, 10]; // Here is our initial oredered list
const shiftedList = [6, 8, 10, 2, 4]; // This is our shifted list

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
  return { max, iterationCount };
}

console.log(findLargestIntIn(shiftedList));
