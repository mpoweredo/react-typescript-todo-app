import { Todo } from '../types/types';

const TodoItem = ({ title, done, id }: Todo) => {
	return (
		<li className='bg-slate-600 rounded-sm w-100 h-auto px-4 py-4 text-white'>
			<div className='flex justify-between items-center'>
				<div>
					<h1 className='font-semibold text-lg'>{title}</h1>
				</div>
				<div className='flex gap-3'>
					<button className={`${done === false ? 'bg-gray-500' : 'bg-emerald-500'} w-24 h-10 font-semibold`}>{done === true ? 'Undone' : 'Done'}</button>
					<button className='bg-red-500 w-24 h-10 font-semibold'>Delete</button>
				</div>
			</div>
		</li>
	);
};

export default TodoItem;
