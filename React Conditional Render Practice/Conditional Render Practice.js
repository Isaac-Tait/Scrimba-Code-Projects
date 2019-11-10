import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: true
        }
        this.isClicked = this.isClicked.bind(this)
    }
    
    isClicked() {
        this.setState(prevState => {
            const isLoggedIn = prevState.isLoggedIn(isLoggedIn => { // You do not need to define isLoggedIn as const
                if (isLoggedIn === true) {
                    return {
                        isLoggedIn: !prevState.isLoggedIn 
                    } 
                }
            }) 
        })
    }
    
    render(){
       return (
            <div>
                <p>You are {this.state.isLoggedIn}...</p>
                
                <button onClick={this.isClicked}>Log-In/Out</button>
                
            </div>
        )
    } 
}
    
export default App