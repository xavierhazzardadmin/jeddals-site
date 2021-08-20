import styles from "../components/About.module.css";
import Layout from "../components/layout";
import TechGrid from "../components/techGrid";

export default function AboutPage() {
    return (
        <Layout title="Xavier Hazzard - About">
            <div
                className={
                    styles.container
                }
            >
                <div
                    className={
                        styles.left
                    }
                >
                    <h1
                        className={
                            styles.subheader
                        }
                    >
                        A bit about me
                    </h1>
                    <p
                        className={
                            styles[
                                "body-text"
                            ]
                        }
                    >
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
                        learned things
                        like: HTML, CSS,
                        JavaScript,
                        NodeJS and
                        NodeJS. Then I
                        moved on to
                        Pluralsight
                        where I am
                        currently
                        learning the Go
                        Programming
                        Language.
                    </p>
                </div>
                <div
                    className={
                        styles.right
                    }
                >
                    <TechGrid />
                </div>
            </div>
        </Layout>
    );
}
