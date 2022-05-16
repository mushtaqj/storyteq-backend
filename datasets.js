/**
 *
 */
const normalCaseDataSet = {
  initialList: [
    1, 3, 7, 8, 9, 10, 11, 13, 15, 17, 19, 21, 22, 25, 55, 57, 100, 102, 103,
    104, 105, 106, 107, 108, 200, 202, 220, 230, 330,
  ],
  shiftedList: [
    102, 103, 104, 105, 106, 107, 108, 200, 202, 220, 230, 330, 1, 3, 7, 8, 9,
    10, 11, 13, 15, 17, 19, 21, 22, 25, 55, 57, 100,
  ],
};

const normalCaseDataSetWithSlicePointInBeginning = {
  initialList: [
    1, 3, 7, 8, 9, 10, 11, 13, 15, 17, 19, 21, 22, 25, 55, 57, 100, 102, 103,
    104, 105, 106, 107, 108, 200, 202, 220, 230, 330,
  ],
  shiftedList: [
    13, 15, 17, 19, 21, 22, 25, 55, 57, 100, 102, 103, 104, 105, 106, 107, 108,
    200, 202, 220, 230, 330, 1, 3, 7, 8, 9, 10, 11,
  ],
};

const normalCaseDataSetWithSlicePointInEnd = {
  initialList: [
    1, 3, 7, 8, 9, 10, 11, 13, 15, 17, 19, 21, 22, 25, 55, 57, 100, 102, 103,
    104, 105, 106, 107, 108, 200, 202, 220, 230, 330,
  ],
  shiftedList: [
    200, 202, 220, 230, 330, 1, 3, 7, 8, 9, 10, 11, 13, 15, 17, 19, 21, 22, 25,
    55, 57, 100, 102, 103, 104, 105, 106, 107, 108,
  ],
};

/**
 * Array is already sorted in descending order, so this would be a constant O(n)
 */
const shiftedInDescendingOrder = {
  initialList: [
    1, 3, 7, 8, 9, 10, 11, 13, 15, 17, 19, 21, 22, 25, 55, 57, 100, 102, 103,
    104, 105, 106, 107, 108, 200, 202, 220, 230, 330,
  ],
  shiftedList: [
    330, 230, 220, 202, 200, 107, 108, 106, 105, 104, 102, 103, 100, 57, 55, 25,
    22, 21, 19, 17, 15, 13, 11, 10, 9, 8, 7, 3, 1,
  ],
};

/**
 * Array is already sorted in ascending order,
 * Can be the best case alorithm if we use the initialList and worst performing
 * if the list cannot be used for context O(1) or O(n)
 */
const shiftedInAscendingOrder = {
  initialList: [
    1, 3, 7, 8, 9, 10, 11, 13, 15, 17, 19, 21, 22, 25, 55, 57, 100, 102, 103,
    104, 105, 106, 107, 108, 200, 202, 220, 230, 330,
  ],
  shiftedList: [
    1, 3, 7, 8, 9, 10, 11, 13, 15, 17, 19, 21, 22, 25, 55, 57, 100, 102, 103,
    104, 105, 106, 107, 108, 200, 202, 220, 230, 330,
  ],
};

module.exports = {
  normalCaseDataSet,
  normalCaseDataSetWithSlicePointInBeginning,
  normalCaseDataSetWithSlicePointInEnd,
  shiftedInAscendingOrder,
  shiftedInDescendingOrder,
};
