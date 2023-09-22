import React from 'react'
import TodoListView from './TodoListView'
import TodoForm from './TodoForm'

import "../Assets/Styles/layout.css"

function Layout() {
  return (
    <>
    
    <nav className='nav-bar'>
        Todo App
    </nav> 
    
    <main className='main-body' >

        <section className='todo-list section-body' >
            <h2  className='heading' > Todo List</h2>
            <TodoListView/>
        </section> 

        <section className='todo-form section-body' >
            <h2 className='heading' > Todo Form</h2>
            <TodoForm/>
        </section>      


    </main>
    </>
  )
}

export default Layout