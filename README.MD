# Storyteq Backend Challenge

[Stackblitz](https://stackblitz.com/edit/storyteq-backend-challenge)

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
2. Can you explain the orders of growth implications of the algorithm you implemented?
3. Suppose our initial list contains 1 million elements, is there a more performant way we can find the answer?

## Unconditional Truths

1. That the max would always be close to the 'slice' point, find the slice point you got the max in few iterations.
2. Halving the array will be of little to no consequence, make the algo even slower on the worse case ?.
3. Sice the 'slice' point can be at any interval it would be incorrect to assume that we can optimize from the middle.
4. Using binary search can be tricky see point 2.

## Edge cases

 1. If it is zero we can just get the last item
 2. Duplicate max ?
 3. Negative numbers ?
 4. Decimal numbers ?
