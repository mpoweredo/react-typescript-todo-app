import React, { useRef } from 'react';
import { Todos } from '../store/TodoContext';
import { EditTodo } from '../types/types';

const EditTodoPopup = ({ title, id, closeEditPopup }: EditTodo) => {
	const editTodoInputRef = useRef<HTMLInputElement>(null);
	const { editTodo } = Todos();

    const editTodoHandler = () => {
        const title = editTodoInputRef.current?.value!

        if (title.trim() === '') {
            return
        }

        editTodo(id, title)
        closeEditPopup()
    }

	return (
		<div className='absolute top-0 left-0 bg-black/50 w-screen h-screen flex items-center justify-center z-10'>
			<div className='bg-slate-500 w-[450px] h-auto flex flex-col gap-5 p-5 relative z-20'>
				<h1 className='text-slate-100 font-bold text-center text-3xl'>Edit your Todo</h1>
				<input
					type='text'
					className='w-full bg-slate-600 rounded-sm text-white font-semibold text-lg px-3 outline-none border-transparent py-1'
					defaultValue={title}
					ref={editTodoInputRef}
				/>
				<div className='flex gap-4 text-white'>
					<button className='bg-emerald-500 w-full h-10 font-semibold rounded-sm' onClick={editTodoHandler}>Edit</button>
					<button
						className='bg-red-500 w-full h-10 font-semibold rounded-sm'
						onClick={closeEditPopup}>
						Cancel
					</button>
				</div>
			</div>
		</div>
	);
};

export default EditTodoPopup;
