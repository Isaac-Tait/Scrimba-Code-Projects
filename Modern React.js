import React, {Component} from "react"

class App extends Component {
    // Change this to...
    constructor() {
        super()
        this.state = {
            firstName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    // ... to this
    class App extends Component {
        state = { firstName: "" }
    
    // Change this....
    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    //...to use arrow function
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    } //changing to arrow function will allow you to remove all of line 10 (this.handleChange = this.handleChange.bind(this))!!
    
    render() {
        return (
            <main>
                <form>
                    <input 
                        type="text"
                        name="firstName" 
                        value={this.state.firstName} 
                        onChange={this.handleChange} 
                        placeholder="First Name"
                    />
                </form>
                <h1>{this.state.firstName}</h1>
            </main>
        )
    }
}

export default App


/* Further Reading: 

 * Other modern/advanced React features/topics to learn:
 * 
 * Official React Context API - https://reactjs.org/docs/context.html
 * Error Boundaries - https://reactjs.org/docs/error-boundaries.html
 * render props - https://reactjs.org/docs/render-props.html
 * Higher Order Components - https://reactjs.org/docs/higher-order-components.html
 * React Router - https://reacttraining.com/react-router/core/guides/philosophy
 * React Hooks - https://reactjs.org/docs/hooks-intro.html
 * React lazy, memo, and Suspense - https://reactjs.org/blog/2018/10/23/react-v-16-6.html
 */