/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css';
import { useContext } from "react";
import { TodoContext } from "../store/todoContextStore";
export default function TodoItems(){
    const {items} = useContext(TodoContext);
    return(
        <div className={styles.todoListContainer}>
            { items.length === 0 && <p className={styles.noDataMessage}>No data</p>}
            {items.map((item)=> <TodoItem key={item.id} item={item}/>)}
        </div>
    )
}