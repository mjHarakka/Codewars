const openOrSenior = (list) => {
  let resultList = []
  for (const item of list) {
    if (item[0] >= 55 && item[1] > 7) {
      resultList.push('Senior')
    } else {
      resultList.push('Open')
    }
  }
  return resultList
}

console.log(
  openOrSenior([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ]),
)
