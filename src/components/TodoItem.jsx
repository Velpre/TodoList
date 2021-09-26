import React, { useState } from "react";


export default function TodoItem(props) {

    const [isDone, setIsDone] = useState(false);

    function checkIsDone() {
        setIsDone(prevValue => {
            return !prevValue;
        })
    };

    return (<li onClick={checkIsDone} style={{ textDecoration: isDone === true ? "line-through" : "" }} key={props.i}>{props.input}</li>)
}
