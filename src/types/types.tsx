export type Todo = {
	title: string;
	done: boolean;
	id: number
};

export type EditTodo = {
	closeEditPopup: () => void
	title: string;
	id: number
}

export type TodosContextValue = {
	todos: Todo[],
	addTodo: (arg0: Todo) => void
	completeTodo: (id: number) => void
	deleteTodo: (id: number) => void
	editTodo: (id: number, newTitle: string) => void
}