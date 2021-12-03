import React, { useState } from "react";

function AddItem(props) {    

    const [textTodo, setTextTodo]=useState('');

    let onNewChangeMessage=(e)=>{
        let text = e.target.value;
        setTextTodo(text)
    }

    let addMessage=()=>{
        if (textTodo!==''){
            props.updateItems(textTodo);
            setTextTodo('')
            }
    }

    return(
        <div>
            <textarea onChange={onNewChangeMessage} 
            value={textTodo}></textarea>
            <button onClick={()=>addMessage()}> Add Item</button>
        </div>
    )
}

export default AddItem;