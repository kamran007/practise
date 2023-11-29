import { counterActions } from "../store"
import { useDispatch } from "react-redux";
import { useRef } from "react";

const Controller = ()=>{
    const inputElement = useRef();
    const dispatch = useDispatch();
    const handleIncrement = ()=>{
        dispatch(counterActions.increment());
    }
    const handleDecrement = ()=>{
        dispatch(counterActions.decrement());
    }

    const handleAdd = ()=>{
        dispatch(counterActions.add({ number: inputElement.current.value}));
        inputElement.current.value= null;
    }
    return(
        <>
            <div className="m-2">
                <a href="#" className="btn btn-primary m-2" onClick={handleIncrement}>+1</a>
                <a href="#" className="btn btn-warning" onClick={handleDecrement}>-1</a>
            </div>
            <div className="m-2">
                <input type="number" ref={inputElement} className="form-control col-6 m-2" placeholder="Input Number"/>
                <button className="btn btn-info m-2" onClick={handleAdd}>ADD</button>
            </div>
        </>
    )
}
export default Controller;