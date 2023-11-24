import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItems from './components/TodoItems';
import AppContainer from './components/AppContainer.jsx';
import AddTodo from './components/AddTodo';
import { useReducer } from 'react';
import { useRef } from 'react';
import { TodoContex } from './store/todoContexStore';

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
function App() {
  let initialValue=[];
 // const [todoList, setTodoList] = useState(initialValue);
 const [todoList,dispatch]= useReducer(todoItemsReducer, initialValue);
  let counter = useRef(1);
  // const addDataHandler = (task,date)=>{
  //   const item = {
  //     "id": counter.current,
  //     "task": task,
  //     "date": date
  //   }
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
  
  //   setTodoList((pre)=> [...pre,item]);
  // }
  // const DeleteHandler = (id)=>{
  //   let newData = todoList.filter(item=> item.id != id);
  //   setTodoList(newData);
  // }
  const DeleteHandler = (id)=>{
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        id
      }
    };
    dispatch(deleteItemAction);
  }
  return (
    <AppContainer>
      <TodoContex.Provider value={{items:todoList,addEventHandler:addDataHandler,DeleteEventHandler:DeleteHandler}}>
      <h3 className='appTitle'>Todo App</h3>
      <AddTodo/>
      <TodoItems/>
      </TodoContex.Provider>
    </AppContainer>
  )
}

export default App;
