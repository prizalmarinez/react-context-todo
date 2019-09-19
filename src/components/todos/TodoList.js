import React, { Component } from 'react'
//context
import { ThemeContext } from '../../contexts/ThemeContext'
import { TodoContext } from '../../contexts/TodoContext'

export default class TodoList extends Component {
    render() {
        return (
            <ThemeContext.Consumer>{(themeContext) => (
                <TodoContext.Consumer>{(todoContext) => {
                    const { isLightTheme, light, dark } = themeContext;
                    const theme = isLightTheme ? light : dark;
                    const { todos } = todoContext;
                    return (
                        <div className="todo-list" style={{ color: theme.syntax, background: theme.bg }}>
                            <ul>
                                {todos.map((todo) => {
                                    return (
                                        <li key={todo.id} style={{ background: theme.ui }}>
                                            {todo.title}
                                        </li>
                                    )
                                })}

                            </ul>
                        </div>
                    )
                }}
                </TodoContext.Consumer>
            )}
            </ThemeContext.Consumer>
        )
    }
}
