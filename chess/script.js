function chess() {
  var board = document.querySelector('.board');
  var block;
  var mark = true;
  var figure = {
    0: ['url(images/bR.png)', 'url(images/bN.png)', 'url(images/bB.png)', 'url(images/bQ.png)', 'url(images/bK.png)', 'url(images/bB.png)', 'url(images/bN.png)', 'url(images/bR.png)'],
    1: ['url(images/bP.png)', 'url(images/bP.png)', 'url(images/bP.png)', 'url(images/bP.png)', 'url(images/bP.png)', 'url(images/bP.png)', 'url(images/bP.png)', 'url(images/bP.png)'],
    6: ['url(images/wP.png)', 'url(images/wP.png)', 'url(images/wP.png)', 'url(images/wP.png)', 'url(images/wP.png)', 'url(images/wP.png)', 'url(images/wP.png)', 'url(images/wP.png)'],
    7: ['url(images/wR.png)', 'url(images/wN.png)', 'url(images/wB.png)', 'url(images/wQ.png)', 'url(images/wK.png)', 'url(images/wB.png)', 'url(images/wN.png)', 'url(images/wR.png)']
  }

  for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      if (j == 0) {
        mark = !mark;
      }
      block = document.createElement('div');

      if (mark) {
        block.className = 'block brown';

      } else {
        block.className = 'block beige';
      }
      if (figure[i] !== undefined && figure[i][j] !== undefined) {
        block.style.backgroundImage = figure[i][j]
        block.style.backgroundPosition = '50% 50%';
      }
      board.appendChild(block);
      mark = !mark;
    }
  }
}
chess();