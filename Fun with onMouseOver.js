import React from "react"

function handleClick() {
    console.log("I was hovered")
}

// https://reactjs.org/docs/events.html#supported-events

function App() {
    return (
        <div>
            <img /*onMouseOver={() => console.log("Hovered!")} ES6 arrow syntax*/ src="https://www.fillmurray.com/200/100"/>
            <br />
            <br />
            <button onMouseOver={handleClick}>Hover over me</button>
        </div>
    )
}

export default App