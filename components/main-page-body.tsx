import Image from "next/image";

import styles from "./MainBody.module.css";

import {
    useEffect,
    useState,
} from "react";

export default function MainBody() {
    const [width, setWidth] = useState(
        0
    );
    const [
        mobile,
        setMobile,
    ] = useState(false);

    useEffect(() => {
        setWidth(window.innerWidth);
        setTimeout(() => {
            setMobile(width <= 815);
        }, 1000);
    }, []);

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
                <div
                    className={
                        styles[
                            "main-body-text"
                        ]
                    }
                >
                    <p>
                        Welcome to my
                        website where
                        you can learn
                        about me, browse
                        the projects I
                        have worked on
                        and view the
                        technologies
                        that I have
                        learned to work
                        with over the
                        time I have been
                        learning to
                        code. You can
                        also contact me
                        via form on the
                        contact me page.
                    </p>
                </div>
                <p
                    className={
                        styles[
                            "main-body-subheader"
                        ]
                    }
                >
                    A bit more about me
                </p>
                <div
                    className={
                        styles[
                            "main-body-text"
                        ]
                    }
                >
                    <p>
                        I enjoy
                        Technology,
                        especially
                        computers.
                        Playing Video
                        Games, Rocket
                        League is my
                        absolute
                        favourite.
                        Photography,
                        including
                        landscape and
                        wedding
                        photography.
                        Graphic Design,
                        I'm only an
                        amateur. I also
                        really enjoy the
                        Marvel and DC
                        universe but I
                        have an
                        incredibly deep
                        love for Star
                        Wars.
                        <br />
                        <br />I started
                        to learn to
                        program when at
                        school but was
                        held back by the
                        teachers who
                        didn't
                        understand what
                        they were
                        teaching. So I
                        took to Google,
                        YouTube and
                        Udemy where I
                        learned: HTML,
                        CSS, JavaScript,
                        NodeJS with
                        Express,
                        Bootstrap, React
                        and NextJS. Then
                        I moved on to
                        Pluralsight
                        where I am
                        currently
                        learning the Go
                        Programming
                        Language.
                    </p>
                </div>
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
                        width={660}
                        height={660}
                        alt="Cartoon Image of myself"
                        priority
                    />
                </div>
                <h1
                    className={
                        styles[
                            "main-body-hero"
                        ]
                    }
                >
                    Welcome to Xavier's
                    World!
                    {mobile}
                </h1>
            </section>
        </main>
    );
}
