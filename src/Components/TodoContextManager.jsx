import React, { createContext, useState } from 'react'

export const TodoContext = createContext();

function TodoContextManager({children}) {

    const [editTodo, setEditTodo] = useState(null)
    const [todoList, setTodoList] = useState([
        {
            title: "wash socks",
            startTime: "09:00",
            endTime: "10:00", 
            isComplete: false,
            priority: "Low",
            notes: ["it gets busy", "warm water"],
            tags: ["laundry", "work clothes"],
        },
        {
            title: "Car battery",
            startTime: "09:00",
            endTime: "10:00",
            isComplete: false,
            priority: "Low",
            notes: ["it gets busy", "engine battery"],
            tags: ["car", "outsourced"],
        }
    ]);
    const EmptyTodoItem = {
        title: "",
        startTime: "",
        endTime: "",
        isComplete: false,
        priority: "Low",
        notes: [],
        tags: [],
    }
    const CreateTodoItem = (todoItem) => {
        setTodoList([todoItem, ...todoList]);
        return todoItem;
    };

    const ReadTodoItem = (todoItemIndex) =>{
        return todoList[todoItemIndex];
    };

    const UpdateTodoItem = (todoItemIndex, newTodoItem) =>{
        const temp = [...todoList];
        temp[todoItemIndex] = newTodoItem;
        setTodoList([...temp]);
        return newTodoItem;
    };

    const DeleteTodoItem = (todoIndex)=>{
        const temp = [...todoList];
        temp.splice(todoIndex,1);
        setTodoList([...temp]);
        return true;
    }
    
    const contextData = {
        EmptyTodoItem,
        todoList,
        editTodo, 
        CreateTodoItem,
        ReadTodoItem,
        UpdateTodoItem,
        DeleteTodoItem,
        setEditTodo
    };
    return (
        <TodoContext.Provider value = {contextData}>
            {children}
        </TodoContext.Provider>
    )
}

export default TodoContextManager