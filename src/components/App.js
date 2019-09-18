import React from 'react'
// css
import './App.css'
// components
import Navbar from './Navbar'
import TodoList from './todos/TodoList'
// contexts
import ThemeContextProvider from '../contexts/ThemeContext'
import ThemeToggle from './ThemeToggle'

const App = () => {
    return (
        <div className="app">
            <ThemeContextProvider>
                <Navbar />
                <TodoList />
                <ThemeToggle />
            </ThemeContextProvider>
        </div>
    )
}

export default App
