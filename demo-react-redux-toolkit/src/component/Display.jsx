import { useSelector,useDispatch } from "react-redux";
import { visibleAction } from "../store";
const Display = ()=>{
    let {counterVal} = useSelector(store=> store.counter);
    let {visibility} = useSelector(store=> store.visible);
    let dispatch = useDispatch();
    const handleChange = ()=>{
        dispatch(visibleAction.switcher());
    }
    return (
        <div className="display">
            { visibility && <p className="text-center">{`Counter: ${counterVal}`}</p>}
            <div className="form-check form-switch m-2">
                <input className="form-check-input" onChange={handleChange} type="checkbox" role="switch" id="flexSwitchCheckChecked" defaultChecked={visibility}/>
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Switch</label>
            </div>
        </div>
    )
}
export default Display;