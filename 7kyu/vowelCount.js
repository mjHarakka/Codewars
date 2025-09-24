function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']

  return str
    .split('')
    .reduce((count, char) => (vowels.includes(char) ? count + 1 : count), 0)
}

console.log(getCount('abracadabra'))
console.log(getCount('pear tree'))
