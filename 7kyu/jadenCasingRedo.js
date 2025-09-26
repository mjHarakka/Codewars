Object.defineProperty(String.prototype, 'toJadenCase', {
  value: function toJadenCase() {
    return this.split(' ')
      .map((c) => c[0].toUpperCase() + c.slice(1, c.length))
      .join(' ')
  },
})

console.log('test this yo'.toJadenCase())

console.log('most trees are blue'.toJadenCase())
