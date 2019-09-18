import React, { Component } from 'react'
//context
import { ThemeContext } from '../../contexts/ThemeContext'

export default class TodoList extends Component {
    static contextType = ThemeContext

    render() {
        // console.log(this.context)
        const { isLightTheme, light, dark } = this.context;
        const theme = isLightTheme ? light : dark;
        console.log(isLightTheme, theme)
        return (
            <div className="todo-list" style={{ color: theme.syntax, background: theme.bg }}>
                <ul>
                    <li style={{ background: theme.ui }}>the way of the kings</li>
                    <li style={{ background: theme.ui }}>the way of the kings</li>
                    <li style={{ background: theme.ui }}>the way of the kings</li>
                </ul>
            </div>
        )
    }
}
