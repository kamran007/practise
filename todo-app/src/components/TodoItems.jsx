/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
import styles from './TodoItems.module.css';
import { useContext } from "react";
import { TodoContex } from "../store/todoContexStore";
export default function TodoItems(){
    const {items} = useContext(TodoContex);
    return(
        <div className={styles.todoListContainer}>
            { items.length === 0 && <p className={styles.noDataMessage}>No data</p>}
            {items.map((item)=> <TodoItem key={item.id} item={item}/>)}
        </div>
    )
}