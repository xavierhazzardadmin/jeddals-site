import Head from "next/head";

import MainBody from "../components/main-page-body";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout";

export default function Home() {
    return (
        <div
            className={styles.container}
        >
            <Head>
                <title>
                    Xavier Hazzard -
                    Home
                </title>
                <meta
                    name="description"
                    content="Xavier Hazzard's portfolio website"
                />
                <link
                    rel="icon"
                    href="/favicon.ico"
                />
            </Head>
            <Layout>
                <MainBody />
            </Layout>
        </div>
    );
}
