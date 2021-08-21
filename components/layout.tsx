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
                <link
                    rel="icon"
                    type="image/png"
                    href="icon.png"
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
