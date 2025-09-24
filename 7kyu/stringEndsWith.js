const solution = (str, ending) => {
  return str.substr(str.length - ending.length, str.length) === ending
}

console.log(solution('abcde', 'cde'))
