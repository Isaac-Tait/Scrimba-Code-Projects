import React from "react"

class App extends React.Component { //A class based component
    constructor() { //Line 4-13 is the constructor
        super()
        this.state = {
            count: 0 //Initializing state with a property called 'count'
        }
        this.handleClick = this.handleClick.bind(this) //Whenever you use setState within a method you have to bind it within the constructor
        this.halveClick = this.halveClick.bind(this) //Bind ensures that the method, in this case halveClick, is bound using 'this' to the class
        this.resetZero = this.resetZero.bind(this)
        this.mysteryButton = this.mysteryButton.bind(this)
    }
    // Line 15 is a method that functions as an "event handler"
    handleClick() {
        this.setState(prevState => { // setState is a "goodie" that comes when you 'extend React.Component'
            return /*This is the object literal*/ {
               count: prevState /*the object*/.count/*the property*/ + 1
            }
        })
    }
    
    halveClick() {
        this.setState(prevState => {
            return {
                count: prevState.count / 2
            }
        })
    }
    
    resetZero() {
        this.setState(prevState => {
            return {
                count: 0
            }
        })
    }
    
    mysteryButton() {
        this.setState(prevState => {
            return {
                count: ((prevState.count * 0.87655537773) / 0.87644)
            }
        })
    }
    
    render() { //Render is a reserved method for React
        return (
            <div>
                <h1>{this.state.count}</h1>
        <button onClick={this.handleClick /*When a method is part of class it must be referenced by 'this.'*/}>Click To Add 1</button> 
                <button onClick={this.halveClick}>Click to halve the number</button>
                <button onClick={this.resetZero}>Click to reset to 0</button>
                <button onClick={this.mysteryButton}>What does this button do?</button>
            </div>
        )
    }
}

export default App