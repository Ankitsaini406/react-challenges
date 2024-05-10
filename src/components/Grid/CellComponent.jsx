import React from 'react'

const CellComponent = ({filled, onClick}) => {
  return (
    <button type='button' onClick={onClick} className={filled ? `cell cell-active` : `cell`}>

    </button>
  )
}

export default CellComponent