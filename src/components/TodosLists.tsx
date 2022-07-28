import { Todos } from '../store/TodoContext';
import { Todo } from '../types/types';
import TodoItem from './TodoItem';

const TodosLists = () => {
	const { todos } = Todos();

	const list = todos.map(todo => (
		<TodoItem title={todo.title} done={todo.done} id={todo.id} key={todo.id} />
	));

	return (
		<div className='bg-slate-500 rounded w-full md:w-2/3 xl:w-2/4 p-4 h-96'>
			<ul className='w-100 flex flex-col gap-3'>{list}</ul>
		</div>
	);
};

export default TodosLists;
