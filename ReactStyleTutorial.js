import React from "react"
import ReactDOM from "react-dom"

function App() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay
  
//How could you change the code on lines 10-16 to alternate text color based upon the time of day? 
//Hint: Line 5 const date = new Date(2018, 6, 31, 15) (Year, Month, Day, Time)
  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
  } else {
    timeOfDay = "night"
  }
  
  //styles on line 20 is called on line 28 within the JSX by surrounding w/ curly braces "{}"
  const styles = {
    color: "#FF8C00", 
    // It is important to change css style dashes "-" with camelcase when writing JSX
    backgroundColor: "#FF2D00",
    fontSize: "200px"
  }
  
  return (
    <h1 style={styles}>Good {timeOfDay}!</h1>
  )
}

ReactDOM.render(<App />, document.getElementById("root"))