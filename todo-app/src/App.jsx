import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItems from './components/TodoItems';
import AppContainer from './components/AppContainer.jsx';
import AddTodo from './components/AddTodo';
import { useState } from 'react';
import { useRef } from 'react';
import { TodoContex } from './store/todoContexStore';
function App() {
  let initialValue=[];
  const [todoList, setTodoList] = useState(initialValue);
  let counter = useRef(1);
  const addDataHandler = (task,date)=>{
    const item = {
      "id": counter.current,
      "task": task,
      "date": date
    }
    counter.current = counter.current + 1;
    setTodoList((pre)=> [...pre,item]);
  }
  const DeleteHandler = (id)=>{
    let newData = todoList.filter(item=> item.id != id);
    setTodoList(newData);
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
