import React, { useEffect, useRef, useState } from 'react'
import todo_icon from "../assets/todo_icon.png"
import TodoItems from './TodoItems'

const ToDo = () => {

    const [todolist,setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) :[] );
    const inputRef = useRef();
    

    const add = () =>{
        const inputText = inputRef.current.value.trim();
    
        if(inputText === ""){
            return ;
        }
        
        const newTodo = {
            id : Date.now(),
            text : inputText,
            isComplete :false,
        }
        setTodoList((prev)=>
            [...prev,newTodo]
        )
        inputRef.current.value = "";
    }

    const deleteTodo = (id) =>{
        setTodoList((prevTodos) =>{
            return prevTodos.filter((todo) => todo.id !== id )
        } )
    }
   
const toggleTodo = (id)=>{
    setTodoList((prevTodos)=>{
        return prevTodos.map((todo)=>{
            if(todo.id === id){
                return {...todo,isComplete:!todo.isComplete}
            }
            return todo;
        })
    })
}

useEffect (()=>{
    localStorage.setItem("todos",JSON.stringify(todolist));
    
},[todolist])

    
  return (
    <>
        <div className ='flex flex-col w-11/12 max-w-md bg-white place-self-center min-h-[550px] rounded-xl ' >

            {/* ----title---- */}

            <div className='flex items-center gap-2 mx-8 mt-10 ' >
                <img  className="w-8" src= {todo_icon}alt="" />
                <h1 className='text-3xl font-semibold' >TO-Do list</h1>
            </div>
            
            {/* ----input box---- */}
            
            <div className='flex items-center ml-10 mr-4 bg-gray-200 rounded-full my-7' >
                <input ref={inputRef} type="text" className='flex-1 pl-6 pr-2 bg-transparent border-0 outline-none h-14 placeholder:text-slate-600' placeholder='add your task' />
                <button onClick={add} className='w-32 text-lg font-medium text-white bg-orange-600 border-none rounded-full cursor-pointer h-14' >Add +</button>
            </div>

            {/* -----to do list */}
            <div>
                
                {todolist.map((item,index) =>{
                    return <TodoItems key={index} text={item.text}  id ={item.id} isComplete ={item.isComplete} deleteTodo = {deleteTodo} toggleTodo = {toggleTodo} />
                } )}
                
                
            </div>

        </div>
    </>
  )
}

export default ToDo
