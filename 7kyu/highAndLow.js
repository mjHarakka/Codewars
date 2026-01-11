function highAndLow(numbers) {
  const newArr = numbers.split(' ').map((c) => Number(c))
  return Math.max(...newArr) + ' ' + Math.min(...newArr)
}

console.log(highAndLow('1 2 3 4 5'))
