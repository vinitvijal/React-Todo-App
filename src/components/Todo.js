import React from 'react'
import { useDispatch } from 'react-redux';
import { del } from '../features/todo';


export default function Todo(props) {
    const dispatch = useDispatch()
    console.log(props)
    if (props.data.button){
        document.getElementById('compBut').hidden = true;
    }else{
        document.getElementById('compBut').hidden = false;

    }
  return (
    <div className='Todo'>
        <h2>{props.data.title}</h2>
        <h5>{props.data.desc}</h5>
        <button id='compBut' onClick={()=>{dispatch(del(props.data))}}>Completed</button>
    </div>
  )
}
