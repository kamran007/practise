import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import TodoItems from './components/TodoItems';
import AppContainer from './components/AppContainer.jsx';
import AddTodo from './components/AddTodo';
import { TodoContextProvider } from './store/todoContextStore';


function App() {
  
  return (
    <AppContainer>
      <TodoContextProvider>
        <h3 className='appTitle'>Todo App</h3>
        <AddTodo/>
        <TodoItems/>
      </TodoContextProvider>
    </AppContainer>
  )
}

export default App;
