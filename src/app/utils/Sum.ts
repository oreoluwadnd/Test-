//using hash Hash Table which prevent nest loops and O(n)

const SumPair = (array: number[], sum: number): number[][] => {
  const temp: { [key: number]: number } = {};
  const nums: number[][] = [];

  for (let i = 0; i < array.length; i++) {
    const num = sum - array[i];

    if (num in temp) {
      nums.push([num, array[i]]);
    }
    temp[array[i]] = i;
  }
  return nums;
};

// Example usage:
const numbers: number[] = [1, 2, 3, 4, 5, 6];
const target: number = 7;
const pairs: number[][] = SumPair(numbers, target);
console.log(pairs); // Output: [ [ 6, 1 ], [ 5, 2 ], [ 4, 3 ] ]
