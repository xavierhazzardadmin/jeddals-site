import Navbar from "./navbar";
import Footer from "./footer";

import Head from "next/head";
import React, {
    ReactNode,
    useEffect,
} from "react";

type Props = {
    children?: ReactNode;
    title?: string;
};

export default function Layout({
    children,
    title = "Xavier Hazzard",
}: Props) {
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
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    name="description"
                    content="Xavier Hazzard's website"
                />
                <meta
                    name="keywords"
                    content="Xavier Hazzard, Xavier Hazzard's website"
                />
                <meta
                    name="author"
                    content="Xavier Hazzard"
                />
                <link
                    rel="icon"
                    type="image/png"
                    href="icon.png"
                />
                <link
                    rel="preconnect"
                    href="https://kit.fontawesome.com/c7a6f77d43.js"
                />
            </Head>
            <div className="page-container">
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    );
}
