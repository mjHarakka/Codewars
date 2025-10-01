/*
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
  const s1Sorted = s1.split('').sort()
  const s2Sorted = s2.split('').sort()
  const result = new Set(s1Sorted.concat(s2Sorted))
  return Array.from(result).sort().join('')
}

const a = 'xyaabbbccccdefww'
const b = 'xxxxyyyyabklmopq'

console.log(longest(a, b))
