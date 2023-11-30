import { useSelector } from "react-redux";
const BagSummary = ()=>{
    const bagWithItemIds = useSelector(store=> store.bag);
    const items = useSelector(store=> store.items);
    const bagItems = items.filter(item=>{
       return bagWithItemIds.indexOf(item.id) >=0
    });
    
    const CONVENIENCE_FEES = 50;
    let totalMRP=0;
    let totalDiscount=0; 
    let finalPayment=0
    bagItems.forEach(item=>{
        totalMRP += item.original_price;
        totalDiscount += item.original_price - item.current_price;
    });
    finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
    return (
        <>
        <div className="bag-details-container">
            <div className="price-header">PRICE DETAILS ({bagWithItemIds.length} Items) </div>
            <div className="price-item">
            <span className="price-item-tag">Total MRP</span>
            <span className="price-item-value">₹{totalMRP}</span>
            </div>
            <div className="price-item">
            <span className="price-item-tag">Discount on MRP</span>
            <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
            </div>
            <div className="price-item">
            <span className="price-item-tag">Convenience Fee</span>
            <span className="price-item-value">₹{CONVENIENCE_FEES}</span>
            </div>
            <hr/>
            <div className="price-footer">
            <span className="price-item-tag">Total Amount</span>
            <span className="price-item-value">₹{finalPayment}</span>
            </div>
        </div>
        <button className="btn-place-order">
            <div className="css-xjhrni">PLACE ORDER</div>
        </button>
        </>
    )
}
export default BagSummary;