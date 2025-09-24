var summation = function (num) {
  const numArr = []

  for (let i = 1; i <= num; i++) {
    numArr.push(i)
  }

  return numArr.reduce((acc, cur) => acc + cur, 0)
}
