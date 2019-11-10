import React from "react"

function App() {
    return (
        <div>
            <h1>Code goes here</h1>
        </div>
    )
}

//Line 13 below is the same as line 3 above. The first is the Function method the second is the Class method. Class is prefered in React 
//because it is more usable when the code gets complicated.

class App extends React.Component {
    render() {
        //If there is any display logic or styling it should go here (between the render and return) E.g. const styles {fontSize: 20}
        return (
            <div>
                <h1>Code goes here</h1> 
            </div>
        )
    }
}
//When calling props it should be formated like this: <h1>{this.props.whatever}</h1>

export default App