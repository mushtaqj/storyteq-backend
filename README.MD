# Storyteq Backend Challenge

[Stackblitz](https://stackblitz.com/edit/storyteq-backend-challenge).

This branch uses the ourosboros principle to burn the array from both ends, we can combine this with
a sliding window pattern to make the algorithm exponentially faster.

The bese cast is O(1) and the worst is O(n-slicepoint)

As you checkout build the project

```sh
npm install
```

Start in dev watch mode

```sh
npm run dev
```

Start normal

```sh
npm start
```

## Challenge

### Shifted List Search

We have a list of ordered integers (ex: `[1, 3, 7, 8, 9, 10, 11]`). Suppose we slice into that list at a random index and append the "top" half of list to the "bottom" (maintaining the order of both halves while doing so).

**Challenge:** Write a function that returns the largest integer in the "shifted" list.

View the samples below for a better understanding of how the lists are mutated:

```javascript
// Sample 1
const initialList = [1, 3, 7, 8, 9, 10, 11];  // Here is our initial ordered list
const shiftedList = [8, 9, 10, 11, 1, 3, 7];  // Here is the list after it has been sliced (at index 3) and shifted
// Your function should return `11`

// Sample 2
const initialList = [2, 4, 6, 8, 10];  // Here is our initial oredered list
const shiftedList = [6, 8, 10, 2, 4];  // Here is the list after it has been sliced (at index 2) and shifted
// Your function should return `10`

// Sample 3
const initialList = [2, 4, 6, 8, 10];  // Here is our initial oredered list
const shiftedList  = [2, 4, 6, 8, 10];  // Here is the list after it has been sliced (at index 0) and shifted
// Your function should return `10`
```

1. Can you identify any edge cases that we need to account for?
   1. Array is sliced at the first index
   2. Array is sliced at the last index
   3. First element is a bigger number and the last element is a smaller number, but this does not mean that the array is
   is in descending order.
2. Can you explain the orders of growth implications of the algorithm you implemented?
   1. **The Array is sliced at index zero** : then the complexity is O(1) because the array is already in ascending order.
   2. **The Array is sliced at the last index** : 0(1) because the array is in descending order and can get the last item
   3. **The Array is sliced at a random index in the middle** : O(n/2-slicepoint).
   4. If we managed to stick in a hacky binary search till we get find the slice point we can try to get some variation of 0(log N)

3. Suppose our initial list contains 1 million elements, is there a more performant way we can find the answer?
   1. First we can slice the array into half and try to use an algorithm that would perform at 0(Log N),
   chunking the array into a **sliding window pattern** would be very performant.

## Unconditional Truths

1. That the max would always be close to the 'slice' point, find the slice point you got the max in few the fewest possible iterations.
2. Halving the arrays and checking the first and the last and first items can give an indication from which side we can progress.
