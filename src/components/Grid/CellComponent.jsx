import React from 'react'

const CellComponent = ({ filled, onClick, isDisabled }) => {
    return (
        <button type='button' onClick={onClick} disabled={isDisabled} className={filled ? `cell cell-active` : `cell`}>

        </button>
    )
}

export default CellComponent