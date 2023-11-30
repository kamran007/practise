/* eslint-disable react/prop-types */

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addToBag, removeFromBag } from "../store/bagSlice";

const ProductItem = ({item})=>{
    const dispatch = useDispatch();
    const bagItems = useSelector(store=> store.bag);
    const elementFound = bagItems.indexOf(item.id) >=0;
    const handleAdd = ()=>{
        dispatch(addToBag(item.id));
    }
    const handleDelete = ()=>{
        dispatch(removeFromBag(item.id));
    }
    return(
        <div className="item-container">
            <img className="item-image" src={item.image} alt="item image"/>
            <div className="rating">
                {item.rating.stars} ⭐ | {item.rating.count}
            </div>
            <div className="company-name">{item.company}</div>
            <div className="item-name">{item.item_name}</div>
            <div className="price">
                <span className="current-price">Rs {item.current_price}</span>
                <span className="original-price">Rs {item.original_price}</span>
                <span className="discount">({item.discount_percentage}% OFF)</span>
            </div>
            {
            elementFound?
            <button className="btn btn-add-bag btn-danger" onClick={handleDelete}>Remove From Bag</button>:
            <button className="btn btn-add-bag btn-success" onClick={handleAdd}>Add to Bag</button>
            }
            
        </div>
    )
}

export default ProductItem;