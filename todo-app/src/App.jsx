import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItems from './components/TodoItems';
import AppContainer from './components/AppContainer.jsx';
import AddTodo from './components/AddTodo';
import { useState } from 'react';
import { useRef } from 'react';
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
      <h3 className='appTitle'>Todo App</h3>
      <AddTodo addDataHandler={addDataHandler}/>
      <TodoItems items={todoList} onDeleteHandler={DeleteHandler}/>
    </AppContainer>
  )
}

export default App;
