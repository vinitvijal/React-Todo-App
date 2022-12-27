import React from 'react'
import { useSelector } from 'react-redux'
import Todo from './Todo'


export default function ShowTodo() {
    const todos =  useSelector((state)=> state.todos.value)
    console.log(todos)
  return (
    <div className='ShowTodo'>
        {
            todos.length === 0?<Todo data={{desc:'Nothing Is There, Make Your Todo', button:'false'}}/>:todos.map((todo)=>{return <Todo data={todo}/>})
        
        }
    </div>
  )
}
