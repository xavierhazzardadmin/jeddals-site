import Head from "next/head";

import { useEffect } from "react";

import styles from "../components/About.module.css";
import gridStyles from "../components/Grid.module.css";
import Layout from "../components/layout";
import TechGrid from "../components/techGrid";

export default function AboutPage() {
    useEffect(() => {
        const script = document.createElement(
            "script"
        );

        script.src =
            "https://kit.fontawesome.com/c7a6f77d43.js";

        script.async = true;

        script.crossOrigin =
            "anonymous";

        document.head.appendChild(
            script
        );
    }, []);

    return (
        <>
            <Head>
                <link
                    rel="preload"
                    crossOrigin="anonymous"
                    as="script"
                    href="https://kit.fontawesome.com/c7a6f77d43.js"
                />
            </Head>
            <Layout title="Xavier Hazzard - About">
                <div
                    className={
                        gridStyles.container
                    }
                >
                    <div
                        className={
                            gridStyles.left
                        }
                    >
                        <h1
                            className={
                                styles.subheader
                            }
                        >
                            A bit about
                            me
                        </h1>
                        <p
                            className={
                                styles[
                                    "body-text"
                                ]
                            }
                        >
                            I love
                            Technology,
                            especially
                            computers.
                            Playing
                            Video Games,
                            Rocket
                            League is my
                            absolute
                            favourite.
                            Photography,
                            including
                            landscape,
                            macro and
                            wedding
                            photography.
                            Graphic
                            Design, I'm
                            only an
                            amateur. I
                            also really
                            enjoy the
                            Marvel and
                            DC universe
                            but I have
                            an
                            incredibly
                            deep love
                            for Star
                            Wars.
                            <br />
                            <br />I
                            started to
                            learn to
                            program when
                            at school
                            but was held
                            back by the
                            teachers who
                            didn't
                            understand
                            what they
                            were
                            teaching. So
                            I took to
                            Google,
                            YouTube and
                            Udemy where
                            I learned
                            things like:
                            HTML, CSS,
                            JavaScript,
                            NodeJS and
                            NodeJS. Then
                            I moved on
                            to
                            Pluralsight
                            where I am
                            currently
                            learning the
                            Go
                            Programming
                            Language.
                        </p>
                        <h1
                            className={
                                (styles.hero,
                                styles.subheader)
                            }
                        >
                            Here's all
                            the
                            technologies
                            I've worked
                            with!
                        </h1>
                    </div>
                    <div
                        className={
                            gridStyles.right
                        }
                    >
                        <TechGrid />
                    </div>
                </div>
            </Layout>
        </>
    );
}
