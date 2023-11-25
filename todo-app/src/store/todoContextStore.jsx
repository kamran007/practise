/* eslint-disable react/prop-types */
import { createContext,useReducer,useRef } from "react";

export const TodoContext = createContext([]);

const todoItemsReducer= (state, action)=>{
    let newTodoItems = state;
    if(action.type === "NEW_ITEM"){
      newTodoItems = [
        ...state,
        {
          id: action.payload.id,
          task: action.payload.task,
          date: action.payload.date
        }
      ]
    }else if(action.type === "DELETE_ITEM"){
      newTodoItems = state.filter((item)=> item.id != action.payload.id);
    }
    return newTodoItems;
}

 export const TodoContextProvider = ({children})=>{
    let initialValue=[];
 const [todoList,dispatch]= useReducer(todoItemsReducer, initialValue);
  let counter = useRef(1);
  const addDataHandler = (task,date)=>{
    const newItemAction ={
      type: "NEW_ITEM",
      payload: {
        id: counter.current,
        task,
        date
      }
    };
    counter.current = counter.current + 1;
    dispatch(newItemAction);
    
  }
  const DeleteHandler = (id)=>{
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        id
      }
    };
    dispatch(deleteItemAction);
  }

  return(
    <TodoContext.Provider value={{items:todoList,addEventHandler:addDataHandler,DeleteEventHandler:DeleteHandler}}>
        {children}
    </TodoContext.Provider>
  )
}