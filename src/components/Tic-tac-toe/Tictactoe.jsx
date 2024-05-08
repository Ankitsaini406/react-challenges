import "../../css/tictactoe.css";
import useTictactoe from "../../hooks/useTictactoe";

const Tictactoe = () => {

    const gridValue = 3;

    const { board, handleClick, getStatusMessage, resetGame } =
        useTictactoe(gridValue);

    return (
        <div className="game" style={{ maxWidth: `calc(${gridValue} * 100px)` }}>
            <div className="status">
                {getStatusMessage()}
                <button onClick={resetGame}>Reset Game</button>
            </div>

            <div className="board" style={{ gridTemplateColumns: `repeat(${gridValue}, 1fr)` }}>
                {board.map((b, index) => {
                    return <button className="cell" key={index}
                        onClick={() => handleClick(index)}
                        disabled={b !== null}
                    >
                        {b}
                    </button>;
                })}
            </div>
        </div>
    );
};

export default Tictactoe;
