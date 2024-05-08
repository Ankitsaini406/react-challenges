import React from 'react'

const Child = ({ handleCount }) => {
  return (
    <div className='child-component'>
        <h4>Child Component</h4>
        <button onClick={handleCount}>Click Me</button>
    </div>
  )
}

export default Child