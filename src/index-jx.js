import React from 'react';
import ReactDOM from 'react-dom';


const tasks = ['Take out the trash', 'shovel the driveway', 'walk the dog'];

const element = 
    <div>
        <h1> HELLO WORLD </h1>
        <ol>  
        { tasks.map ((task, index) => <li key = {index}> {task} </li>)}
        </ol>
    </div>

ReactDOM.render(element, document.getElementById('root'));