function countBits(n) {
    if (typeof n !== 'number' || isNaN(n)) n = 0;
    const match = n.toString(2).match(/1/g);
    const result = match ? match.length : 0;
    return result;
}

console.log(countBits(null))