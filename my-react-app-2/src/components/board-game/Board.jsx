import Square from "./Square";

export default function Board({ xIsNext, squares, onPlay }) {
  const winner = calWin(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Move: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i) {
    if (squares[i] || calWin(squares)) {
      return;
    }
    const nextSquares = squares.slice();
    console.log(nextSquares);
    nextSquares[i] = "X";

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }

    console.log(nextSquares);
    onPlay(nextSquares);
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(0)} value={squares[0]} />
        <Square onSquareClick={() => handleClick(1)} value={squares[1]} />
        <Square onSquareClick={() => handleClick(2)} value={squares[2]} />
      </div>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(3)} value={squares[3]} />
        <Square onSquareClick={() => handleClick(4)} value={squares[4]} />
        <Square onSquareClick={() => handleClick(5)} value={squares[5]} />
      </div>
      <div className="board-row">
        <Square onSquareClick={() => handleClick(6)} value={squares[6]} />
        <Square onSquareClick={() => handleClick(7)} value={squares[7]} />
        <Square onSquareClick={() => handleClick(8)} value={squares[8]} />
      </div>
    </div>
  );
}

function calWin(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
