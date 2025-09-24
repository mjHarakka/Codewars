function dontGiveMeFive(start, end) {
  let counter = 0
  for (let i = start; i <= end; i++) {
    if (!i.toString().includes('5')) {
      counter++
    }
  }
  return counter
}

console.log(dontGiveMeFive(1, 81))
