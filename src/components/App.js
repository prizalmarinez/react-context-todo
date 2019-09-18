import React from 'react'
// css
import './App.css'
// components
import Navbar from './Navbar'
import TodoList from './todos/TodoList'
// contexts
import ThemeContextProvider from '../contexts/ThemeContext'
import AuthContextProvider from '../contexts/AuthContext'

import ThemeToggle from './ThemeToggle'

const App = () => {
    return (
        <div className="app">
            <AuthContextProvider>
                <ThemeContextProvider>
                    <Navbar />
                    <TodoList />
                    <ThemeToggle />
                </ThemeContextProvider>
            </AuthContextProvider>
        </div>
    )
}

export default App
