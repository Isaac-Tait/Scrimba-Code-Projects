import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "", // ""= value
            lastName: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) { //The event is the inputing of text
        this.setState({
            [event.target.name]: event.target.value //Target is the ____. Defining name allows the h1 tag to show the DOM updating with each stroke for both first and last name strings
        })
    }
    
    render() {
        return (
            <form>
                <input 
                    type="text"
                    value={this.state.firstName} // In a form text entered is matched with what is in State
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} 
                />
                <br />
                <input 
                    type="text" 
                    value={this.state.lastName} // In a controlled form you want State to drive what is displayed in the form.
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange} 
                />
                <h1>{this.state.firstName} {this.state.lastName}</h1>
            </form>
        )
    }
}

export default App