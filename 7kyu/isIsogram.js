const isIsogram = (str) => {
  const arr = []
  str = str.toLowerCase()

  for (let i = 0; i < str.length; i++) {
    console.log(arr)
    if (arr.includes(str[i])) {
      return false
    }
    arr.push(str[i])
  }
  return true
}

console.log(isIsogram('aba'))
console.log(isIsogram('isogram'))
console.log(isIsogram('rGPMsHulUDoTWQxY'))
