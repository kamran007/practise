/* eslint-disable react/prop-types */
import styles from "./ButtonContainer.module.css";
export default function ButtonContainer({children}){
    return(
        <div className={styles.buttonContainer}>{children}</div>
    );
}