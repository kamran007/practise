import { useSelector } from "react-redux";
import BagItem from "./BagItem";
import BagSummary from "./BagSummary";

const Bag = ()=>{
    const bagWithItemIds = useSelector(store=> store.bag);
    const items = useSelector(store=> store.items);
    const bagItems = items.filter(item=>{
       return bagWithItemIds.indexOf(item.id) >=0
    });
    return (
        <main>
            <div className="bag-page">
                <div className="bag-items-container">
                    { bagItems.map(item=> <BagItem key={item.id} item={item} />)}
                </div>
                <div className="bag-summary">
                    <BagSummary/>
                </div>
            </div>
        </main>
    )
}

export default Bag;