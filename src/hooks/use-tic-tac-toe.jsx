import { useEffect, useState } from "react";

const intialboard = () => Array(9).fill(null);

export const useTicTacToe = () => {
    const [board, setBoard] = useState(intialboard());
    const [isXNext, setIsXNext] = useState(true);
    const [winCell, setWinCell] = useState([]);
    const [winner, setWinner] = useState(null);

    const WINNING_PATTERNS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    useEffect(() => {
        calculateWinner();
    }, [board]); 

    const calculateWinner = () => {
        for (let i = 0; i < WINNING_PATTERNS.length; i++) {
            const [a, b, c] = WINNING_PATTERNS[i];
            if (board[a] && board[a] ===board[b] && board[a] === board[c]) {
                setWinCell([a, b, c]);
                setWinner(board[a]);
                return;
            }
        }
        setWinCell([]);
        setWinner(null);
    };

    const handleClick = (index) => {
       if(winner || board[index]) {
            return;
       }

         const newBoard = [...board];
            newBoard[index] = isXNext ? "X" : "O";
            setBoard(newBoard);
            setIsXNext(!isXNext);
    };

    const getStatusMessage = () => {
        if (winner) {
            return `Player ${winner} wins!`;
        } else if (board.every(cell => cell !== null)) {
            return "It's a draw!";
        } else {
            return `Next player: ${isXNext ? "X" : "O"}`;
        }
    };

    const resetGame = () => {
       setBoard(intialboard());
       setIsXNext(true); 
       setWinCell([]);
       setWinner(null);
    };

    return {
        board,
        handleClick,
        getStatusMessage,
        resetGame,
        winCell  };
}


