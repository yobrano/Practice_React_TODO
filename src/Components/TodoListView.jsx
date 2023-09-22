import React, { useContext } from 'react'
import {TodoContext} from './TodoContextManager'
import "../Assets/Styles/todolist.css"
function TodoListView() {
	const {todoList, setEditTodo, DeleteTodoItem} = useContext(TodoContext);

	return (
		<>
		{todoList.length === 0?
			<i>Added Todos will appear here.</i>:
			
		<ol>
			{todoList.map(
				(todoItem, idx)=>
				<li key={idx}>
					{todoItem.title}
					<span onClick={()=>setEditTodo(idx)} >Edit</span>	
					<span onClick={()=>DeleteTodoItem(idx)} >Delete</span>	
				</li>
			)}	
		</ol>
		
	}

		<table className='list-container'>
			<thead >
		
			<tr className='list-header'>
				<td className='header-item'>
					Title
				</td>
				<td>
					Start
				</td>
				<td className='header-item'>
					End
				</td>
				<td className='header-item'>
					Completed
				</td>
				<td className='header-item'>
					Priority
				</td>
			</tr>
				
			</thead>
			
			<tbody className='list-body'>

				{todoList.map((todoItem, idx)=>{
					return(
					<tr key= {idx} className='list-item' >
						{console.log(todoItem.title)}
						<td className='body-item'>
							{todoItem.title}
						</td>

						<td className='body-item'>
							{todoItem.startTime}
						</td>

						<td className='body-item'>
							{todoItem.endTime}
						</td>
						<td className='body-item'>
							{todoItem.isComplete? "Yes": "No"}
						</td>
						<td className='body-item'>
							{todoItem.priority}
						</td>
						
					</tr>
				)})}
			</tbody>
			
		</table>
		</>
	)
}

export default TodoListView