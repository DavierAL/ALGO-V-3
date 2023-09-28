let numbers = [
    [5, 2, 8],
    [9, 1, 4],
    [6, 3, 7],
  ]
  
  function flat(matrix) {
    // return matrix.flat()
    
    let result = []
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[i].length; col++) {
        result.push(matrix[i][j])
      }
    }
    return result
  }
  
  function unflat(array, size) {
    let result = []
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size))
    }
    return result
  }
  