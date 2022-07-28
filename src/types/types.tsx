export type Todo = {
	title: string;
	done: boolean;
};

export type TodosContextValue = {
	todos: Todo[],
	addTodo: (arg0: Todo) => void
}