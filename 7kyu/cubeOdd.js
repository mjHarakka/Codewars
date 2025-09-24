const cubeOdd = (arr) => {
  if (arr.some((i) => typeof i !== 'number')) {
    return undefined
  }

  return arr
    .map((i) => i ** 3)
    .filter((i) => i % 2 !== 0)
    .reduce((sum, i) => sum + i, 0)
}
console.log(cubeOdd([1, 2, 3, 4]))
