import React from "react"

function TodoItem() {
    return (
        <div className="todo-item">
            <input type="checkbox" />
            <p>Placeholder text here</p>
        </div>
    )
}

export default TodoItem

//Line 5 div has a className (must be camelCase, just 'class' will not work). CSS file appears as below:
.todo-item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 30px 20px 0;
    width: 70%;
    border-bottom: 1px solid #cecece;
    font-family: Roboto, sans-serif;
    font-weight: 100;
    font-size: 15px;
    color: #333333;
}

//You could do a child class change by using the following code:

.todo-item > p {
    font-size: 12px;
}
//This will apply a font size of 12px to all the <p> elements found within the <div> class.

const ToDoItem = () => 
<div className="todo-item">
    <input type="checkbox" /> 
    <p>Placeholder text here</p>
</div>
// rewriting the above function (line 35) as an arrow function

//Styling inline using a const to make the code look cleaner
function RandomStyle() {
    const styles = {
        color: "#FF8C00", 
        backgroundColor: "#FF2D00",
        fontSize: 20 //can also be written "20px" Note: The "" are necessary...
      }
      
      return (
        <h1 style={styles}>Good {timeOfDay}!</h1>
      )
}

