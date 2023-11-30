import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { markFetchDone, markFetchingFinished, markFetchingStarted } from "../store/fetchStatusSlice";
import { addInitialItems } from "../store/itemsSlice";

const FetchItems = ()=>{
    const fetchStatus = useSelector(store=> store.fetchStatus);
    const dispatch = useDispatch();

    useEffect(()=>{
        if(fetchStatus.fetchDone) return;

        const controller = new AbortController();
        const signal = controller.signal;

        dispatch(markFetchingStarted());
        fetch("http://localhost:8080/items",{signal})
        .then(res=> res.json())
        .then(({items})=>{
            dispatch(markFetchDone())
            dispatch(markFetchingFinished())
            dispatch(addInitialItems(items[0]))
        });
        return ()=>{
            controller.abort();
        };
    },[fetchStatus]);
    return <></>;
}
export default FetchItems;