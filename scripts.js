function hideBoard() {
  var board = document.getElementById('board-one')
  if(board.style.display === 'none') {
    board.style.display = 'flex'
  } else {
    board.style.display = 'none'
  }
}
