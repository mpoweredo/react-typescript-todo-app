import { useState } from 'react';
import { Todos } from '../store/TodoContext';
import { Todo } from '../types/types';
import EditTodoPopup from './EditTodoPopup';

const TodoItem = ({ title, done, id }: Todo) => {
	const { completeTodo, deleteTodo } = Todos();
	const [isEditing, setIsEditing] = useState<boolean>(false);

	const completeTodoHandler = () => {
		completeTodo(id);
	};

	const deleteTodoHandler = () => {
		deleteTodo(id);
	};

	const editTodoHandler = () => {
		setIsEditing(prevState => !prevState)
	};

	return (
		<>
			{isEditing && <EditTodoPopup title={title} id={id} closeEditPopup={editTodoHandler} />}
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
						<button className='bg-indigo-500 w-24 h-10 font-semibold' onClick={editTodoHandler}>
							Edit
						</button>
					</div>
				</div>
			</li>
		</>
	);
};

export default TodoItem;
