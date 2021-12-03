const ADD_ITEM="addItem";

let initialState={
        items:[{
            
        }],    
}

const actionsListReducer=(state=initialState,action)=> {
    switch(action.type){
        case ADD_ITEM:
            let item = action.todoTitle;
            return {
                ...state,
                items: [...state.items,item]
            };
        default:
            return state;
    }
};
export const addItemCreator=(text)=>({type:ADD_ITEM, todoTitle:text})

export default actionsListReducer;
