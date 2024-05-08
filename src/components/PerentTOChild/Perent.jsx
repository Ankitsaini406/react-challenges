import React, { useState } from 'react'
import Child from './Child'
import '../../css/perenttochild.css'

const Perent = () => {

    const [count, setCount] = useState(0);

    const handleCount = () => {
        setCount(count + 1);
    }

  return (
    <div className='perent-component'>
        <h4>Perent Component</h4>
        <p>Count : {count}</p>
        <Child handleCount = {handleCount} />
    </div>
  )
}

export default Perent