import React, { useState } from "react"

//This....
function App() {
    const [ answer ] = useState("Yä man, it is!")
    return (
        <div>
            <h1>Is state important to know? {answer}</h1>
        </div>
    )
}

//versus this....

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             answer: "Yes"
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>Is state important to know? {this.state.answer}</h1>
//             </div>
//         )
//     }
// }

export default App