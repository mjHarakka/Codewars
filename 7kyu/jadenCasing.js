/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/

Object.defineProperty(String.prototype, 'toJadenCase', {
  value: function toJadenCase() {
    return this.split(' ')
      .map((word) => {
        let capitalizedWord = ''
        capitalizedWord = word[0].toUpperCase() + word.slice(1, word.length)
        return capitalizedWord
      })
      .join(' ')
  },
})

/*
String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}
*/
