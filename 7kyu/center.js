function center(strng, width, fill = ' ') {
  let newStr = ''
  let count = strng.length
  if (count > width) {
    return strng
  }

  count = width - strng.length

  if (count % 2 == 0) {
    for (let i = 0; i < count / 2; i++) {
      newStr += fill
    }
    newStr += strng
    for (let i = 0; i < count / 2; i++) {
      newStr += fill
    }
  } else {
    for (let i = 0; i < Math.ceil(count / 2); i++) {
      newStr += fill
    }
    newStr += strng
    for (let i = 0; i < Math.floor(count / 2); i++) {
      newStr += fill
    }
  }

  return newStr
}
console.log(center('a', 3)) // returns " a "
console.log(center('abc', 10, '_')) // returns "____abc___"
