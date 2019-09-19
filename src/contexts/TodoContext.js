import React, { createContext, Component } from 'react'
// api
import jsonPlaceholder from '../api/jsonPlaceholder'

export const TodoContext = createContext();


export default class TodoContextProvider extends Component {
    state = {
        todos: []
    }

    componentDidMount() {
        jsonPlaceholder.get('/todos').then(response => {
            this.setState({ todos: response.data })
        })
    }

    render() {
        return (
            <TodoContext.Provider value={{ ...this.state }}>
                {this.props.children}
            </TodoContext.Provider>
        );
    }
}

// export default ThemeContextProvider