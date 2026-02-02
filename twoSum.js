/*Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indexes of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: https://leetcode.com/problems/two-sum/

*/

function twoSum(numbers, target) {
  let result = []
  let resultIndex = []
  for (let i = 0; i < numbers.length; i++) {
    result[0] = numbers[i]
    resultIndex[0] = i
    for (let j = 0; j < i; j++) {
      if (result[0] + numbers[j] === target) {
        result[1] = numbers[j]
        resultIndex[1] = j

        return resultIndex
      }
    }
  }
}
