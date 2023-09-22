import React, { useContext, useEffect, useRef, useState } from 'react'
import {TodoContext} from './TodoContextManager'
import "../Assets/Styles/todoform.css"

function TodoForm() {
	
	const {CreateTodoItem, editTodo, setEditTodo, todoList, UpdateTodoItem, EmptyTodoItem} = useContext(TodoContext);
	
	const [todoItem, setTodoItem] = useState(()=> editTodo===null?EmptyTodoItem:todoList[editTodo]);
	const [noteEntry, setNoteEntry ]= useState("");
	const [tagEntry, setTagEntry ]= useState("");

	const startDateRef = useRef();
	const startTimeRef = useRef();
	const endDateRef = useRef();
	const endTimeRef = useRef();
	const noteEntryRef = useRef();
	const tagEntryRef = useRef();

	const handleNoteSubmit = event =>{
		if(event.key !== "Enter") return
		
		const notes = [...todoItem.notes]
		notes.unshift(noteEntry)
		setTodoItem({
			...todoItem,
			notes:[...notes]
		})

		noteEntryRef.current.blur()
		setNoteEntry("")
	}
	
	const handleTagSubmit = event =>{
		if(event.key !== "Enter") return
		
		const tags = [...todoItem.tags]
		tags.unshift(tagEntry)
		setTodoItem({
			...todoItem,
			tags:[...tags]
		})

		tagEntryRef.current.blur()
		setTagEntry("")
	}

	
	const handleTodoSubmit = event =>{
		event.preventDefault()
		if(editTodo===null){
			CreateTodoItem(todoItem)
		}else{
			UpdateTodoItem(editTodo, todoItem)
			setEditTodo(null)
		}
		setTodoItem(EmptyTodoItem);
		setNoteEntry("");
		setTagEntry("");
	}

	useEffect(() => {
		if(editTodo!==null)setTodoItem(todoList[editTodo])
	}, [editTodo])

	
	return (
		<aside className='form-container'>
			{/* Title Etry */}
			<div>
				<span>
					Title:
					<input 
						type='text' 
						value={todoItem.title} 
						onChange={
							(e) => setTodoItem({
								...todoItem, 
								title: e.target.value })
							} 
					/>
				</span>
			</div>

			{/* Priority Etry */}
			<div>
				<span>
					Priority
					<select 
						value={todoItem.priority} 
						onChange={
							(e)=>setTodoItem({
								...todoItem,
								priority: e.target.value
							})
						}
					>
						<option value="Low" default > Low</option>
						<option value="Medium"> Medium</option>
						<option value="High"> High</option>
					</select>

				</span>
			</div>
			
			{/* Complete Etry */}
			<div>
				<span>
					Completed
					<select 
						value={todoItem.isComplete} 
						onChange={
							(e)=>setTodoItem({
								...todoItem,
								isComplete: e.target.value="true"?true:false
							})
						}
					>
						<option value={true} default > Yes</option>
						<option value={false}> No</option>
					</select>
				</span>
			</div>

			{/* Start Date Time Etry */}
			<div>
				Start Time
				<input 
					type="date" 
					ref={startDateRef}
					value={todoItem.startTime? todoItem.startTime.split(" ")[0]: ""}
					onChange={
						(e)=>{
							setTodoItem({
								...todoItem,
								startTime: `${e.target.value} ${startTimeRef.current.value}`
							})
							startTimeRef.current.focus()
						}
					}
				/>
				<input 
				 type = "time" 
				 ref={startTimeRef} 
				 value={todoItem.startTime? todoItem.startTime.split(" ")[1]: ""}
				 onChange={
					 (e)=> setTodoItem({
							 ...todoItem,
							 startTime: `${startDateRef.current.value} ${e.target.value}`
						 })
					 
				 }
				 />
			</div>

			{/* End Date Time Etry */}
			<div>
				End Time
				<input 
					type="date" 
					ref={endDateRef}
					value={todoItem.endTime? todoItem.endTime.split(" ")[0]: ""}
					onChange={
						(e)=>{
							setTodoItem({
								...todoItem,
								endTime: `${e.target.value} ${endTimeRef.current.value}`
							})
							endTimeRef.current.focus()
						}
						
					}
				/>

				<input 
				 type = "time" 
				 ref={endTimeRef} 
				 value={todoItem.endTime? todoItem.endTime.split(" ")[1]: ""}
				 onChange={
					 (e)=> {setTodoItem({
							 ...todoItem,
							 endTime: `${endDateRef.current.value} ${e.target.value}`
						 })}
					 
				 }
				 />
			</div>
			
			{/* Notes Entry */}
			<div>
				<span>
				 	Note:
					 <input 
						type='text' 
						value={noteEntry} 
						ref={noteEntryRef}
						onChange={(e) => setNoteEntry(e.target.value) }
						onKeyDown={handleNoteSubmit}
					/>

					
						{todoItem.notes.length === 0?
						<i>Added notes will appear here.</i>:
						<ul>
							{ todoItem.notes.map((note, idx)=><li key= {idx}>{note}</li>)}
						</ul>
						}
					
				</span>
				
			</div>
			
			{/* Tag Entry */}
			<div>
				<span>
				 	Tags:
					 <input 
						type='text' 
						value={tagEntry} 
						ref={tagEntryRef}
						onChange={(e) => setTagEntry(e.target.value) }
						onKeyDown={handleTagSubmit}
					/>
				</span>
				{todoItem.tags.length === 0?
					<i>Added Tags will appear here.</i>:
					<ul>
						{ todoItem.tags.map((tag, idx)=><li key={idx}>{tag}</li>)}
					</ul>
				}
			</div>

			{/* Submit buttons */}
			<div>
				<input type="submit"  onClick={handleTodoSubmit}/>
			</div>
		</aside>
	)
}




export default TodoForm