import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {add} from '../features/todo'

export default function CreateTodo() {
    const dispatch = useDispatch()
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

  return (
    <div className='CreateTodo'>
        <input type="text" placeholder='Title' value={title} onChange={(e)=>{setTitle(e.target.value)}} />
        <textarea cols="40" rows="5" value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
        <button onClick={()=>{dispatch(add({title:title, desc:description}));setTitle('');setDescription('')}}>Add Todo</button>
    </div>
  )
}
