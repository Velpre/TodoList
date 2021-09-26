import React, {useState} from 'react'

export default function InputArea(props) {

    const [inputState, setInput] = useState("");


    function saveItem(e) {
        const newInputValue = e.target.value;
        setInput(newInputValue);
    }

    return (
        <div className="form">
            <input onChange={saveItem} type="text" value={inputState} />
            <button onClick={()=>{
                props.add(inputState)
                setInput("");
            }}>
                <span>Add</span>
            </button>
        </div>
    )
}
