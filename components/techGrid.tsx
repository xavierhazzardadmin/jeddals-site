import styles from "./TechGrid.module.css";

export default function TechGrid() {
    return (
        <div
            className={
                styles.gridContainer
            }
        >
            <i className="fab fa-react fa-6x"></i>
            <i className="fab fa-node-js fa-6x"></i>
            <i className="fab fa-css3 fa-6x"></i>
            <i className="fab fa-html5 fa-6x"></i>
            <i className="fab fa-js-square fa-6x"></i>
            <i className="fab fa-bootstrap fa-6x"></i>
        </div>
    );
}
