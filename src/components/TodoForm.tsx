import React, { useRef } from 'react'
import { Todos } from '../store/TodoContext'

import { Todo } from '../types/types'

const TodoForm = () => {
    const todoInputRef = useRef<HTMLInputElement>(null)
    const {addTodo} = Todos()

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const todoTitle: string = todoInputRef.current?.value!

        if (todoTitle.trim() === '') {
            return
        }

        const todoObj: Todo = {
            title: todoTitle,
            done: false,
            id: Math.random() // not really unique but for personal project is fine
        }

        todoInputRef!.current!.value = ''
        addTodo(todoObj)
    }

  return (
    <div className='bg-slate-500 rounded w-full md:w-2/3 xl:w-2/4 p-4'>
        <form className='flex w-100 gap-3' onSubmit={submitHandler}>
            <input type="text" className='w-full bg-slate-600 rounded-sm text-white font-semibold text-lg px-3 outline-none border-transparent' ref={todoInputRef} />
            <button className='px-4 py-2 bg-indigo-700 w-36 text-indigo-200 font-bold rounded-sm'>Add</button>
        </form>
    </div>
  )
}

export default TodoForm