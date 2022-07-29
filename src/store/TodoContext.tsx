import { createContext, PropsWithChildren, useContext, useState } from 'react';
import { Todo, TodosContextValue } from '../types/types';

const TodoContext = createContext<TodosContextValue | null>(null);

export const TodoContextProvider = ({ children }: PropsWithChildren) => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodo = (todo: Todo) => {
		setTodos(prevTodos => [...prevTodos, todo]);
	};

	const completeTodo = (id: number) => {
		console.log(todos);
		setTodos(prevTodos => {
			return prevTodos.map(todo => {
				if (todo.id === id) {
					return {
						...todo,
						done: !todo.done,
					};
				}
				return todo;
			});
		});
	};

	const deleteTodo = (id: number) => {
		setTodos(prevTodos => {
			return prevTodos.filter(todo => todo.id !== id);
		});
	};

	const editTodo = (id: number, newTitle: string) => {
		setTodos(prevTodos => {
			return prevTodos.map(todo => {
				if (todo.id === id) {
					return {
						...todo,
						title: newTitle,
					};
				}
				return todo;
			});
		});
	};

	return (
		<TodoContext.Provider value={{ todos, addTodo, completeTodo, deleteTodo, editTodo }}>
			{children}
		</TodoContext.Provider>
	);
};

export const Todos = () => {
	return useContext(TodoContext) as TodosContextValue;
};
