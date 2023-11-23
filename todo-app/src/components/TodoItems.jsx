/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css';
export default function TodoItems({items,onDeleteHandler}){
    return(
        <div className={styles.todoListContainer}>
            { items.length === 0 && <p className={styles.noDataMessage}>No data</p>}
            {items.map((item)=> <TodoItem key={item.id} item={item} onDeleteHandler={onDeleteHandler}/>)}
        </div>
    )
}