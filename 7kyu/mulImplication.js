function multImplication(arr) {
  if (arr.length === 0) return null

  let result = arr[0]
  for (let i = 1; i < arr.length; i++) {
    // Implication: p -> q is equivalent to !p || q
    result = !result || arr[i]
  }
  return result
}
