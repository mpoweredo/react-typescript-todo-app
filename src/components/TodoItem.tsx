import { Todos } from '../store/TodoContext';
import { Todo } from '../types/types';

const TodoItem = ({ title, done, id }: Todo) => {
	const { completeTodo, deleteTodo } = Todos();

	const completeTodoHandler = () => {
		completeTodo(id);
	};

	const deleteTodoHandler = () => {
		deleteTodo(id);
	};

	return (
		<li className='bg-slate-600 rounded-sm w-100 h-auto px-4 py-4 text-white'>
			<div className='flex justify-between items-center'>
				<div>
					<h1 className='font-semibold text-lg'>{title}</h1>
				</div>
				<div className='flex gap-3'>
					<button
						onClick={completeTodoHandler}
						className={`${
							done === false ? 'bg-gray-500' : 'bg-emerald-500'
						} w-24 h-10 font-semibold`}>
						{done === true ? 'Undone' : 'Done'}
					</button>
					<button className='bg-red-500 w-24 h-10 font-semibold' onClick={deleteTodoHandler}>
						Delete
					</button>
                    {/* <button className='bg-indigo-500 w-24 h-10 font-semibold' onClick={deleteTodoHandler}>
						Edit
					</button> */}
				</div>
			</div>
		</li>
	);
};

export default TodoItem;
