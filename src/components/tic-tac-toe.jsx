
import { useState } from "react";
import { useTicTacToe } from "../hooks/use-tic-tac-toe.jsx";


export default function TicTacToe() {
    const {board, handleClick, getStatusMessage, resetGame, winCell} = useTicTacToe();

  return(
    <div className="game">
      <div className="status">
        {getStatusMessage()}
        <button className="reset-button" onClick={resetGame}>
            Reset Game
        </button>
      </div>

      <div className="board">
        {board.map((b,index) => {
          const cellWin = winCell.includes(index) ? "winCell" : "cell";
          return (<button className= {cellWin} key={index} onClick={() => 
          handleClick(index)} disabled={b !== null}>
                {b}
          </button> ) 
                })}
      </div>
    </div>

  );
} 