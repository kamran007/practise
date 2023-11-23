/* eslint-disable react/prop-types */
import styles from "./AppContainer.module.css";
export default function AppContainer({children}){
    return (
        <div className={`${styles.appContainer}`}>{children}</div>
    )
}