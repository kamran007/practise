/* eslint-disable react/prop-types */
import { FiDelete } from "react-icons/fi";
export default function TodoItem({item,onDeleteHandler}){
    const {id,task,date} = item;  
    return (
        <>
        <div className="row py-2">
        <div className="col-5">{task}</div>
        <div className="col-5">{date}</div>
        <div className="col-2"><button className="btn btn-danger" onClick={()=>onDeleteHandler(id)}> <FiDelete /></button></div>
        </div>
        </>
    );
}