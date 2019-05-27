import React from 'react';

const person = (props) => {
    return (
        <div>
            <p className="blue" onClick={props.click}>Hello Person {props.name} and {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} value={props.name}/>
        </div>
    )
};

export default person;