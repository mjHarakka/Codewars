function strCount(obj) {
  let numOfStrings = 0

  // recursively iterate through the array
  const recursiveCheck = (arr) => {
    let count = 0
    for (const item of arr) {
      if (Array.isArray(item)) {
        count += recursiveCheck(item)
      } else {
        if (typeof item === 'string') {
          count++
        }
      }
    }
    return count
  }

  for (const [key, value] of Object.entries(obj)) {
    console.log('key', key)
    console.log('value', value)

    if (Array.isArray(value)) {
      numOfStrings += recursiveCheck(value)
    }
    if (typeof value === 'string') {
      numOfStrings++
    }
  }

  return numOfStrings
}

console.log(
  strCount({
    first: '1',
    second: '2',
    third: false,
    fourth: ['anytime', 2, 3, 4],
    fifth: null,
    sixth: undefined,
    seventh: {},
  })
)

/*
const recursiveCheck = (arr) => {
  let count = 0
  for (const item of arr) {
    if (Array.isArray(item)) {
      count += recursiveCheck(item)
    } else {
      if (typeof item === 'string') {
        count++
      }
    }
  }
  return count
}

const arr = [
  'and another',
  2,
  'and again',
  [undefined, 'and again', ['and again again', undefined]],
  false,
]

console.log(
  strCount({
    first: '1',
    second: '2',
    third: false,
    fourth: ['anytime', 2, 3, 4],
    fifth: [
      'and another',
      2,
      'and again',
      [undefined, 'and again', ['and again again', undefined]],
      false,
    ],
  })
)
*/
