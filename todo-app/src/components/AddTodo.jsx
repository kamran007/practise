/* eslint-disable react/prop-types */
import { useRef } from "react";
import { IoBagAddOutline } from "react-icons/io5";
export default function AddTodo({addDataHandler}){
    const data_task = useRef();
    const data_date = useRef();
    const submitData= (e)=>{
        e.preventDefault();
        const task_name = data_task.current.value;
        const desiredDate = data_date.current.value;
        addDataHandler(task_name,desiredDate);
        data_task.current.value = '';
        data_date.current.value = '';

    }
    return(
        <form className="todoFormContainer" onSubmit={(e)=> submitData(e)}>
            <div className="row">
                <div className="col-5">
                    <input className="form-control" ref={data_task} type="text" placeholder="Enter Task Name"/>
                </div>
                <div className="col-5">
                    <input className="form-control" ref={data_date} type="date"/>
                </div>
                <div className="col-2">
                    <button className="btn btn-primary"><IoBagAddOutline/></button>
                </div>
            </div>
        </form>
    );
}