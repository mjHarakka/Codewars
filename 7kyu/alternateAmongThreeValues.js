function f(x, cc) {
  const lookup = {
    [cc.a]: cc.b,
    [cc.b]: cc.c,
    [cc.c]: cc.a,
  }

  return lookup[x]
}

//console.log(f(3, { a: 3, b: 4, c: 5 })) // 4
console.log(f(4, { a: 3, b: 4, c: 5 })) // 5
//console.log(f(5, { a: 3, b: 4, c: 5 })) // 3
