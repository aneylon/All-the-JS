var islandCount = function(mapStr) {
  var total = 0
  var arrMap = mapStr.split('\n')
    .map((line) => {
      return line.split('')
    })
  var height = arrMap.length
  var width = arrMap[0].length

  var sinkIsland = function(row, col) {
    arrMap[row][col] = '.'
    if(col+1 < width && arrMap[row][col+1] === '0') {
      sinkIsland(row, col + 1)
    }
    if(col-1 >= 0 && arrMap[row][col-1] === '0') {
      sinkIsland(row, col - 1)
    }
    if(row-1 >= 0 && arrMap[row-1][col] === '0') {
      sinkIsland(row-1, col)
    }
    if(row+1 < height && arrMap[row+1][col] === '0') {
      sinkIsland(row+1, col)
    }
  }

  arrMap.forEach(function(row, x) {
    row.forEach(function(point, y) {
      if (point === '0') {
        total++
        sinkIsland(x, y)
      }
    })
  })

  return total
}

var findSquares = function(){

}
