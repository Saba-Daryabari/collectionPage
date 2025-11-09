
import styles from '../styles/collection.module.scss'
import { LuRectangleVertical } from "react-icons/lu";
import { RiGridFill, RiArrowDropDownLine } from "react-icons/ri";

export default function Filter() {
    return (
        <div className="">
            <div className={styles.topBar}>
                <div className={styles.routes}>
                    furniture / beds / shop all <RiArrowDropDownLine />{" "}
                </div>
                <div className={styles.color}>colors</div>
                <div className={styles.filter}>All filters</div>
                <div className={styles.icon}>
                    <LuRectangleVertical />
                </div>
                <div className={styles.icon}>
                    <RiGridFill />
                </div>
            </div>
        </div>
    );
}
