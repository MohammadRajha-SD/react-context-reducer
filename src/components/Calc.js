import React, { useState }  from 'react'
import { useNumber, useDispatch } from '../contexts/context';
const Calc = () => {
  const [num1, setNum1] = useState(null)
  const [num2, setNum2] = useState(null)
  const num = useNumber()
  const dispatch = useDispatch()
  return (
    <div>
      <h1>{num ?? 0}</h1>
      <hr/>
      <br/>

      <label> Number 1</label>
      <input 
        value={num1} 
        onChange={(e) => setNum1(e.target.value)} 
      />

      <br />

      <label> Number 2</label>
      <input 
        value={num2} 
        onChange={(e) => setNum2(e.target.value)} 
      />

      <hr/>

      <button onClick={() => { dispatch({type:'add', payload:{n1:num1, n2:num2}})}}>+</button>
      <button onClick={() => { dispatch({type:'sub', payload:{n1:num1, n2:num2}})}}>-</button>
      <button onClick={() => { dispatch({type:'mul', payload:{n1:num1, n2:num2}})}}>x</button>
      <button onClick={() => { dispatch({type:'div', payload:{n1:num1, n2:num2}})}}>%</button>
    </div>
  )
}

export default Calc