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

console.log(SeriesSum(2))
