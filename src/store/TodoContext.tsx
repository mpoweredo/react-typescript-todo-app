import { createContext, PropsWithChildren, useContext, useState } from "react"
import { Todo, TodosContextValue } from "../types/types"

const TodoContext = createContext<TodosContextValue | undefined>(undefined)

export const TodoContextProvider = ({children}: PropsWithChildren) => {
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodo = (todo: Todo) => {
        setTodos(prevTodos => ([...prevTodos, todo]))
    }

    return <TodoContext.Provider value={{todos, addTodo}}>
        {children}
    </TodoContext.Provider>
}

export const Todos = () => {
    return useContext(TodoContext)
}