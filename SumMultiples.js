var sumOfMultiples = function (n) {
  let ans = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 3 == 0 || i % 5 == 0 || i % 7 == 0) {
      ans += i;
    }
  }
  return ans;
};
console.log(sumOfMultiples(7));
