export type Todo = {
	title: string;
	done: boolean;
	id: number
};

export type TodosContextValue = {
	todos: Todo[],
	addTodo: (arg0: Todo) => void
	completeTodo: (id: number) => void
	deleteTodo: (id: number) => void
}