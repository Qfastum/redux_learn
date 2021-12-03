import React, { useState } from 'react';
import s from './CreateList.module.css';
import Item from './Item/Item';

function CreateList({items}) {

    // let updateItem=(text)=>{
    //     let removeItem =props.items.indexOf(text)   
    //     props.items.splice(removeItem,1)
    //     props.setItems([...props.items]);     
    // }
    console.log('list')
    console.log(items)
    const renderItems=()=>{
        if (items.length>0)
        {
            return items.map(m => {
                return <Item item={m} />
            });
        }
        else {
            return <p>not item</p>
        }
    }
    

    return(
        <div className={s.bord}>
            <ul>
            {renderItems()}
            </ul>
        </div>
    )
}

export default CreateList;