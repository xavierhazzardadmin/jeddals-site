import styles from "./TechGrid.module.css";

type styles = {
    color: string;
};

type technology = {
    name: string;
    styles: styles;
    id: number;
};

export default function TechGrid() {
    const size = "fa-10x";
    const technologies: technology[] = [
        {
            name: "react",
            styles: {
                color: "DarkTurquoise",
            },
            id: 1,
        },
        {
            name: "node-js",
            styles: {
                color: "green",
            },
            id: 2,
        },
        {
            name: "css3",
            styles: {
                color: "dodgerBlue",
            },
            id: 3,
        },
        {
            name: "html5",
            styles: {
                color: "orangered",
            },
            id: 4,
        },
        {
            name: "js-square",
            styles: {
                color: "gold",
            },
            id: 5,
        },
        {
            name: "bootstrap",
            styles: {
                color: "slateblue",
            },
            id: 6,
        },
        {
            name: "windows",
            styles: {
                color: "deepskyblue",
            },
            id: 7,
        },
        {
            name: "linux",
            styles: {
                color: "black",
            },
            id: 8,
        },
        {
            name: "sass",
            styles: {
                color: "violet",
            },
            id: 9,
        },
        {
            name: "git-alt",
            styles: {
                color: "orangered",
            },
            id: 10,
        },
        {
            name: "github",
            styles: {
                color: "grey",
            },
            id: 11,
        },
        {
            name: "npm",
            styles: {
                color: "red",
            },
            id: 12,
        },
    ];

    const gridItems = technologies.map(
        (tech) => {
            return (
                <i
                    className={`fab fa-${tech.name} ${size}`}
                    style={tech.styles}
                    key={tech.id}
                ></i>
            );
        }
    );
    return (
        <div
            className={
                styles.gridContainer
            }
        >
            {/* <i */}
            {/*     className="react fa-10x" */}
            {/*     style={{ */}
            {/*         color: */}
            {/*             "DarkTurquoise", */}
            {/*     }} */}
            {/* ></i> */}
            {/* <i */}
            {/*     className="node-js fa-10x" */}
            {/*     style={{ */}
            {/*         color: "green", */}
            {/*     }} */}
            {/* ></i> */}
            {/* <i */}
            {/*     className="css3 fa-10x" */}
            {/*     style={{ */}
            {/*         color: "DodgerBlue", */}
            {/*     }} */}
            {/* ></i> */}
            {/* <i */}
            {/*     className="html5 fa-10x" */}
            {/*     style={{ */}
            {/*         color: "orangered", */}
            {/*     }} */}
            {/* ></i> */}
            {/* <i */}
            {/*     className="js-square fa-10x" */}
            {/*     style={{ */}
            {/*         color: "gold", */}
            {/*     }} */}
            {/* ></i> */}
            {/* <i */}
            {/*     className="bootstrap fa-10x" */}
            {/*     style={{ */}
            {/*         color: "slateblue", */}
            {/*     }} */}
            {/* ></i> */}
            {/* <i */}
            {/*     className="windows fa-10x" */}
            {/*     style={{ */}
            {/*         color: */}
            {/*             "deepskyblue", */}
            {/*     }} */}
            {/* ></i> */}
            {/* <i */}
            {/*     className="linux fa-10x" */}
            {/*     style={{ */}
            {/*         color: "black", */}
            {/*     }} */}
            {/* ></i> */}
            {/* <i */}
            {/*     className="sass fa-10x" */}
            {/*     style={{ */}
            {/*         color: "violet", */}
            {/*     }} */}
            {/* ></i> */}
            {gridItems}
        </div>
    );
}
