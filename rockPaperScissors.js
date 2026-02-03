const rps = (p1, p2) => {
  const beats = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper',
  }

  if (p1 === p2) return 'Draw!'
  return beats[p1] === p2 ? 'Player 1 won!' : 'Player 2 won!'
}

console.log(rps('scissors', 'paper'))
