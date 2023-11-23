import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons'
import Display from './components/Display'

function App() {
  const [value,setValue] = useState('');
  const clickHandler= (data)=>{
    if(data === 'AC'){
      //clear Display
      setValue('');
    }else if(data === '='){
      //evalutae Result
      let newVal=eval(value);
      setValue(newVal);
    }else{
      //appent data
      let newValue= `${value}${data}`;
      setValue(newValue);
    }
  }
  return (
    <div className='container'>
    <Display value={value}/>
    <Buttons clickHandler={clickHandler}/>
    </div>
  )
}

export default App
