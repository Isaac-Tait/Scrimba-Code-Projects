import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.isClicked = this.isClicked.bind(this)
    }
    
    isClicked() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }
    
    render() {
        let buttonText = this.state.isLoggedIn ? "Log me out, please." : "Log me in, please."
        let displayText = this.state.isLoggedIn ? "You are currently: Logged in" : "You are currently: Logged out"    
        return (
            <div>
                <h3>{displayText}</h3>
                <button onClick={this.isClicked}>{buttonText}</button>
            </div>
        )
    }
}

export default App