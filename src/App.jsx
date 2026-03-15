import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment } from './feature/counterSlice';

const App = () => {
  const count = useSelector((status)=> status.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        dispatch(increment());
      }}>plus</button>
    </div>
  )
}

export default App
