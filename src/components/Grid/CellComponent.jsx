import React from 'react'

const CellComponent = ({ filled, onClick, isDisabled }) => {
    return (
        <button type='button' onClick={onClick} disabled={isDisabled} className={filled ? `grid-cell cell-active` : `grid-cell`}>

        </button>
    )
}

export default CellComponent