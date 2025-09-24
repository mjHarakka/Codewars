// https://www.codewars.com/kata/552fc8d81b59b6b4820000a4

function magicArray(...args) {
  let arr

  // If single array passed in → use that
  if (args.length === 1 && Array.isArray(args[0])) {
    arr = args[0]
  } else {
    arr = args
  }

  // Enhance with fn methods
  Object.keys(fn).forEach((key) => {
    arr[key] = fn[key]
  })

  return arr
}

const fn = {
  getFiltered() {
    return -1
  },
}

var testArray = magicArray(1, 2, 3, 'a', 'b', 'c'), // [1, 2, 3, "a", "b", "c"]
  testArrayAlt = magicArray([1, 2, 3, 'a', 'b', 'c']) // [1, 2, 3, "a", "b", "c"]

// getFiltered
var filtered = testArray.getFiltered(function (a) {
  return typeof a === 'string'
}) // ["a", "b", "c"];
console.log(filtered)
