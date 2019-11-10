import React from "react"
import React-DOM from "react-dom";

import Joke from "./Joke"
import jokesData from "./jokesData"
 
function App() {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const doubled = nums.map(function(num) {
        return num * 2
    }
    )
    
/*Arrow function*/

    function App() {
        const jokeComponents = jokesData.map(joke => /*Return is implicit*/ <Joke key={joke.id} 
            question={joke.question} punchLine={joke.punchLine} />)