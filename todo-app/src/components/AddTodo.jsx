/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoBagAddOutline } from "react-icons/io5";
export default function AddTodo({addDataHandler}){
    const initialValue={
        "task": "",
        "date": ""
    }
    const [data,setData] = useState(initialValue);
    const changeHandler= (e)=>{
        let newData = {...data};
        if(e.target.name === 'task'){
            newData.task = e.target.value;
        }else if(e.target.name === 'date'){
            newData.date = e.target.value;
        }
        setData(newData);
    }
    const submitData= (task,date)=>{
        addDataHandler(task,date);
        setData(initialValue);
    }
    return(
        <div className="todoFormContainer">
        <div className="row">
        <div className="col-5">
        <input className="form-control" name="task" value={data.task} type="text" placeholder="Enter Task Name" onChange={changeHandler} />
        </div>
        <div className="col-5">
        <input className="form-control" name="date" value={data.date} type="date" onChange={changeHandler}/>
        </div>
        <div className="col-2">
        <button className="btn btn-primary" onClick={()=> submitData(data.task,data.date)}><IoBagAddOutline/></button>
        </div>
        </div>
        </div>
    );
}