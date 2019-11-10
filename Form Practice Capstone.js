import React, {Component} from "react"

class App extends Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "", //radio button
            location: "", //dropdown menu (minimum 3 options)
                isVegan: false,
                isLowFodmap: false,
                isGlutenFree: false //checkbox (minimum 3 options)
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
      handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({ [name]: checked }) : this.setState({ [name]: value })
    }
    
    render() {
        return (
            <main>
            
            <h1>Tait Airlines: The best airline - EVER!</h1>
            
                <form onSubmit={this.handleSubmit}>
                
                    <input 
                        type="text"
                        value={this.state.firstName}
                        name="firstName"
                        placeholder="First Name"
                        onChange={this.handleChange}
                    />
                    
                    <br />
                    
                    <input
                        type="text"
                        value={this.state.lastName}
                        name="lastName"
                        placeholder="Last Name"
                        onChange={this.handleChange}
                    />
                    
                    <br />
                    
                    <input 
                        type="text"
                        value={this.state.age}
                        name="age"
                        placeholder="Age"
                        onChange={this.handleChange}
                    />
                    
                    <br />
                    <br />
                    
                    <input 
                        type="radio"
                        name="gender"
                        value="Male"
                        checked={this.state.gender === "Male"}
                        onChange={this.handleChange}
                    /> Male
                    <br />
                    
                    <input 
                        type="radio"
                        name="gender"
                        value="Female"
                        checked={this.state.gender === "Female"}
                        onChange={this.handleChange}
                    /> Female
                    <br />
                    
                    <input 
                        type="radio"
                        name="gender"
                        value="Prefer not to specify"
                        checked={this.state.gender === "Prefer not to specify"}
                        onChange={this.handleChange}
                    /> Prefer not to specify
                    
                    <br />
                    
                    <h3>Choose Your Destination</h3>
                    
                        <select 
                        value={this.state.location}
                        onChange={this.handleChange}
                        name="location"
                        >
                            <option value="">-- Please Select a Destination --</option>
                            <option value="Iceland">Iceland</option>
                            <option value="Japan">Japan</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Bangkok">Bankok</option>
                            <option value="Denver">Denver</option>
                            
                        </select>
                    
                    <h3>Your Dietary Preferences:</h3>
                    
                    <input 
                        type="checkbox"
                        name="isVegan"
                        value="Vegan"
                        checked={this.state.isVegan}
                        onChange={this.handleChange}
                    /> Vegan
                    <br />
                    
                    <input 
                        type="checkbox"
                        name="isLowFodmap"
                        value="Low FODMAP"
                        checked={this.state.isLowFodmap}
                        onChange={this.handleChange}
                    /> Low-FODMAP
                    <br />
                    
                    <input 
                        type="checkbox"
                        name="isGlutenFree"
                        value="Gluten Free"
                        checked={this.state.isGlutenFree}
                        onChange={this.handleChange}
                    /> Gluten Free
                
                    <br />
                    <br />
                    
                </form>
                
                <hr />
                <h4>Your Personal Information (please ensure that all is correct before clicking "Submit" below :</h4>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.location}</p>
                <p>Your dietary preferences:</p>
                <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
                <p>Low FODMPAP: {this.state.isLowFodmap ? "Yes" : "No"}</p>
                <p>Gluten Free: {this.state.isGlutenFree ? "Yes" : "No"}</p>

            <button>Submit</button>
            
            </main>
        )
    }
}

export default App