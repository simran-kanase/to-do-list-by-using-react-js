import React from 'react'
import tick from "../assets/tick.png"
import not_tick from "../assets/not_tick.png"
import delete_icon from "../assets/delete.png"

const TodoItems = ( {text,id,isComplete ,deleteTodo,toggleTodo} ) => {
  return (
    <div className='flex items-center gap-2 my-3 ' >
      
        <div onClick={()=>{toggleTodo(id)}}  className='flex items-center flex-1 gap-2 mx-10 cursor-pointer' >
            <img src={isComplete ? tick : not_tick} alt="" className='w-7' />
            <p  className= {`text-slate-700 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : "" } `} > {text} </p>
        </div>
        
        <img  src= {delete_icon} alt="" className='mr-5 w-3.5 cursor-pointer' onClick={()=> {deleteTodo(id)} }
         />
      
    </div>
  )
}

export default TodoItems
