import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1>Hello, welcome to React with Javascript!</h1>
    //     </div>
    // )
    return React.createElement(
         'div', 
         null,  
         React.createElement('h1', null, 'Hello RCR week  with arrow function'))
} 

export default Hello