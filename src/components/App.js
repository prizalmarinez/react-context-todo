import React from 'react'
// css
import './App.css'
// components
import Navbar from './Navbar'
import TodoList from './todos/TodoList'
import ThemeToggle from './ThemeToggle'
// contexts
import ThemeContextProvider from '../contexts/ThemeContext'
import AuthContextProvider from '../contexts/AuthContext'
import TodoContextProvider from '../contexts/TodoContext'

const App = () => {
    return (
        <div className="app">
            <AuthContextProvider>
                <ThemeContextProvider>
                    <Navbar />
                    <TodoContextProvider>
                        <TodoList />
                    </TodoContextProvider>
                    <ThemeToggle />
                </ThemeContextProvider>
            </AuthContextProvider>
        </div>
    )
}

export default App
