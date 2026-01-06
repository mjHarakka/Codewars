const isDivisible = (...args) => {
  const firstArg = args[0]

  for (let i = 1; i < args.length; i++) {
    if (firstArg % args[i] !== 0) {
      return false
    }
  }

  return true
}

console.log(isDivisible(6, 1, 3))
