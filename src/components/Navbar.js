import React, { Component } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { AuthContext } from '../contexts/AuthContext'

export default class Navbar extends Component {
    // static contextType = ThemeContext
    render() {
        return (
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                    const { toggleAuth, isLoggedIn } = authContext
                    const { isLightTheme, light, dark } = themeContext;
                    const theme = isLightTheme ? light : dark;
                    // const auth = 
                    return (
                        <div>
                            <nav style={{ background: theme.ui, color: theme.syntax }}>
                                <h1>
                                    App Name
                                </h1>
                                <h3>
                                    <a onClick={toggleAuth}>{isLoggedIn ? 'Logged In' : "Logged Out"}</a>
                                </h3>
                                <ul>
                                    <li>Home</li>
                                    <li>About</li>
                                    <li>Contract</li>
                                </ul>
                            </nav>
                        </div>
                    )
                }}
                </ThemeContext.Consumer>
            )}
            </AuthContext.Consumer>
        )
    }
}
