function SeriesSum(n) {
  let k = 1
  let result = 0
  for (let i = 1; i <= n; i++) {
    result += 1 / k
    console.log(result)
    k += 3
  }

  return result.toFixed(2)
}

/*
AI ANSWER1
function SeriesSum(n) {
  let sum = 0
  for (let i = 0; i < n; i++) {
    sum += 1 / (1 + 3 * i)
  }
  return sum.toFixed(2)
}
*/
