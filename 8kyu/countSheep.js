const countSheeps = sheep => sheep.every(sheep => typeof sheep === 'boolean') ? sheep.reduce((acc, num) => acc + num, + 0) : 0

console.log(countSheeps([true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true]))
