function disemvowel(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  let sentence = ''

  str.split('').forEach((c) => {
    if (!vowels.includes(c.toLowerCase())) {
      sentence += c
    }
  })

  return sentence
}

console.log(disemvowel('This website is for losers LOL!'))
