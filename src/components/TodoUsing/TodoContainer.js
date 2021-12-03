import React,{ useState, useLayoutEffect } from "react";
import { connect, useDispatch, useSelector, useStore } from "react-redux";
import { addItemCreator } from "../../store/actionListReducer";
import AddItem from "./AddItem/titleImput";
import CreateList from "./CreateList/CreteList";


const TodoContainer=()=> {
    const dispatch=useDispatch();

    const items = useSelector(state=>{
        console.log("state fired")
        console.log(state)
        return state.items})
    console.log(items)    

    useLayoutEffect(() => {
        console.log('test')
    }, [items])

    

    const updateItems=(text)=>{
        console.log('add todo item fire')
       dispatch(addItemCreator(text))
        
    }    

    return (<div>
        <AddItem updateItems={updateItems}/>
        <CreateList items={items}/>
    </div>)
};

export default TodoContainer;