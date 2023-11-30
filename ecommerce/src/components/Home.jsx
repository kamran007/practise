import { useSelector } from 'react-redux';
//import items from '../items';
import ProductItem from './ProductItem';
const Home = ()=>{
    const items =useSelector(store=> store.items);
    return (
    <main>
        <div className="items-container">
            {items.map(item=> <ProductItem key={item.id} item={item}/>)}
        </div>
    </main>
    )
}
export default Home;