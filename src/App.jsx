import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './feature/counterSlice';

const App = () => {
  const count = useSelector((status)=> status.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        dispatch(increment());
      }}>plus</button>
      <button onClick={()=>{
        dispatch(decrement());
      }}>minus</button>
    </div>
  )
}

export default App
