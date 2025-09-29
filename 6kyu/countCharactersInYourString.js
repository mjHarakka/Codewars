function count(string) {
  const obj = {}
  string.split('').forEach((c) => {
    if (!obj[c]) {
      obj[c] = 0
    }
    obj[c] = obj[c] + 1
  })
  return obj
}

console.log(count('aba'))
