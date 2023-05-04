let puzzleObj = {
  word: 'snicker',
  grid: [[]],
  coordinates: []
}

const checkInBounds = (coordinate) => {
  return (coordinate < 0 || coordinate > 3)
}

const checkConflict = (x, y) => {
  return puzzleObj.grid[x][y] !== ''
}

const getNextRow = (currentRow) =>{
  let nextRow = null
  do {
    const randomRowMove = Math.floor(Math.random() * 3);
    if (randomRowMove === 0) {
      nextRow = currentRow - 1
      // check if in bounds
    } else if (randomRowMove === 1) {
      nextRow = currentRow
    } else {
      nextRow = currentRow + 1
    }
  }while(checkInBounds(nextRow)) 
  return nextRow
}

const getNextCol = (currentCol) =>{
  let nextCol = null
  do {
    const randomColMove = Math.floor(Math.random() * 3);
    if (randomColMove === 0) {
      nextCol = currentCol - 1
    } else if (randomColMove === 1) {
      nextCol = currentCol
    } else {
      nextCol = currentCol + 1
    }
  }while(checkInBounds(nextCol)) 
  return nextCol
}

function placeLetters (puzzle) {
  let currentRow, nextRow, nextCol = null
  let currentCol = 0

  // Randomly select starting row and place first letter
  currentRow = (Math.floor(Math.random() * 4))
  puzzleObj.grid[currentRow][currentCol] = puzzleObj.word[0]
  puzzleObj.coordinates.push([currentRow, currentCol])

  for (let i = 1; i < puzzleObj.word.length; i++) {
      let conflict = false
      let count = 0
      do{
        nextRow = getNextRow(currentRow)
        nextCol = getNextCol(currentCol)
        conflict = checkConflict(nextRow, nextCol)
        count++
        if(count === 9) {
          // do nothing for now
        }
      } while(conflict && count < 10)
      puzzleObj.grid[nextRow][nextCol] = puzzleObj.word[i]
      puzzleObj.coordinates.push([nextRow, nextCol])

      currentCol = nextCol
      currentRow = nextRow
  }
}

const endPath = (letter) => {
  let isItSo = false
  puzzleObj.grid.forEach(row => {
    row.forEach((el, colIndex) => {
      if(row.length-1 === colIndex) {
        if(el === letter) 
          isItSo = true
      }
    })
  })
  return isItSo
}

function fillGrid() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  puzzleObj.grid.forEach((row, rowIndex) => {
      row.forEach((el, colIndex) => {
          if(el === '') puzzleObj.grid[rowIndex][colIndex] = characters[Math.floor(Math.random()* 26)]
      })
  })
}

function generateGrid () {
  do {
      // reset grid and coordinates
      puzzleObj.grid = [...Array(4)].map(e => Array(4).fill(''));
      puzzleObj.coordinates = []
      placeLetters()
  } while(!endPath(puzzleObj.word[puzzleObj.word.length-1], puzzleObj.grid))
  fillGrid()
  console.log(puzzleObj.coordinates)
  console.log(puzzleObj.grid)
  return puzzleObj
}

module.exports = generateGrid