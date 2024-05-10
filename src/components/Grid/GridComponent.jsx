import React, { useState } from "react";
import "../../css/gridcomponent.css";
import CellComponent from "./CellComponent";

const GridComponent = () => {
    const [order, setOrder] = useState([]);

    const gridArray = [
        [1, 1, 1],
        [1, 0, 1],
        [1, 1, 1],
    ];

    const activateCells = (index) => {
        const newOrder = [...order, index];
        setOrder(newOrder);

        if (newOrder.length === gridArray.flat(1).filter(Boolean).length) {
            deactiveteCells();
        }
    };

    const deactiveteCells = () => { };

    return (
        <div className="wrapper">
            <div
                className="grid"
                style={{ gridTemplateColumns: `repeat(${gridArray[0].length}, 1fr)` }}
            >
                {gridArray.flat(1).map((value, index) => {
                    return value ?
                        <CellComponent
                            key={index}
                            filled={order.includes(index)}
                            onClick={() => activateCells(index)}
                        />
                        :
                        <span></span>
                })}
            </div>
        </div>
    );
};

export default GridComponent;
