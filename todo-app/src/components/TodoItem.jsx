/* eslint-disable react/prop-types */
import { FiDelete } from "react-icons/fi";
import { useContext } from "react";
import { TodoContext } from "../store/todoContextStore";
export default function TodoItem({item}){
    const {DeleteEventHandler} = useContext(TodoContext);
    const {id,task,date} = item;  
    return (
        <>
        <div className="row py-2">
        <div className="col-5">{task}</div>
        <div className="col-5">{date}</div>
        <div className="col-2"><button className="btn btn-danger" onClick={()=>DeleteEventHandler(id)}> <FiDelete /></button></div>
        </div>
        </>
    );
}