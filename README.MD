# Storyteq Backend Challenge

The bese cast is O(1) and the worst is O(n-slicepoint)

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
