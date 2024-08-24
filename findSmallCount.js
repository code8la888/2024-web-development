function findSmallCount(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < num) {
      count++;
    }
  }
  console.log(count);
  return count;
}

findSmallCount([1, 2, 3, 4, 5], 0);
findSmallCount([1, 2, 3, 4, 5], 1);
findSmallCount([1, 2, 3, 4, 5], 2);
findSmallCount([1, 2, 3, 4, 5], 3);
