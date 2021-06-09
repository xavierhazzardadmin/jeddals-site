import Image from "next/image";

import styles from "./MainBody.module.css";

export default function MainBody() {
    return (
        <main
            className={
                styles[
                    "main-body-container"
                ]
            }
        >
            <section
                className={styles.left}
            >
                <h1
                    className={
                        styles[
                            "main-body-subheader"
                        ]
                    }
                >
                    Hey, How's it going?
                </h1>
                <p
                    className={
                        styles[
                            "main-body-text"
                        ]
                    }
                >
                    My name is Xavier
                    Charles Hazzard and
                    I am a 15 year old,
                    aspiring Software
                    Engineer from Kent,
                    England.
                </p>
                <br />
                <p
                    className={
                        styles[
                            "main-body-text"
                        ]
                    }
                >
                    Welcome to my
                    website where you
                    can learn about me,
                    browse the projects
                    I have worked on and
                    view the
                    technologies that I
                    have learned to work
                    with over the time I
                    have been learning
                    to code. You can
                    also contact me via
                    form on the contact
                    me page.
                </p>
                <h1
                    className={
                        styles[
                            "main-body-hero"
                        ]
                    }
                >
                    Welcome to Xavier's
                    World!
                </h1>
            </section>
            <section
                className={styles.right}
            >
                <div
                    className={
                        styles[
                            "main-body-image"
                        ]
                    }
                >
                    <Image
                        src={
                            "/main-body-image.png"
                        }
                        width={100}
                        height={100}
                        alt="Cartoon Image of myself"
                        layout="responsive"
                    />
                </div>
            </section>
        </main>
    );
}
