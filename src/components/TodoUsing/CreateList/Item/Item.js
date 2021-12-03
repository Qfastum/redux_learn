import React from "react";

function Item(props) {


    // let removeItem=()=>{
    //     props.updateItem(props.item);
    // }
    console.log("<LI>")
    return(
        <div>
            
            <li>{props.item} <span > Remove</span></li> 
        </div>
    )
}
export default Item;