import Head from "next/head";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import MainBody from "../components/main-page-body";
import styles from "../styles/Home.module.css";

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
            <Navbar />
            <MainBody />
            <Footer />
        </div>
    );
}
