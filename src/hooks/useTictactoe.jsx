import { useState } from "react";

const useTictactoe = (gridVlaue) => {

    const initialBoard = () => Array(gridVlaue * gridVlaue).fill(null);

    const [board, setBorad] = useState(initialBoard());
    const [isNext, setIsNext] = useState(true);

    const WINNING_PATTERNS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 6, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    const calculateWinnner = (currentBoard) => {
        ; for (let i = 0; i < WINNING_PATTERNS.length; i++) {
            const [a, b, c] = WINNING_PATTERNS[i]
            if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
                return currentBoard[a];
            }
        }
        return null;
    };

    const handleClick = (index) => {
        // check winner
        const winner = calculateWinnner(board);
        console.log(winner);
        if (winner || board[index]) return;

        const newBoard = [...board];
        newBoard[index] = isNext ? "X" : "O";
        setBorad(newBoard);
        setIsNext(!isNext);
    };

    const getStatusMessage = () => {
        const winner = calculateWinnner(board);
        if (winner) return `Player ${winner} wins!`;
        if (!board.includes(null)) return `It's a draw!`;
        return `Player ${isNext ? "X" : "O"} trun`;
    }

    const resetGame = () => {
        setBorad(initialBoard());
        setIsNext(true);
    }

    return { board, handleClick, calculateWinnner, getStatusMessage, resetGame }
};

export default useTictactoe;