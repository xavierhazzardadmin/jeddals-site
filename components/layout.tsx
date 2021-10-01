import Navbar from "./navbar";
import Footer from "./footer";

import Head from "next/head";
import React, {
    ReactNode,
} from "react";

type Props = {
    children?: ReactNode;
    title?: string;
};

export default function Layout({
    children,
    title = "Xavier Hazzard",
}: Props) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <link
                    rel="stylesheet proload"
                    crossOrigin="anonymous"
                    as="style"
                    type="text/css"
                    href="https://use.typekit.net/gtw7drm.css"
                />
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
                <meta
                    property="og:image"
                    content="https://avatars.githubusercontent.com/u/19726688?v=4"
                />
                <meta
                    property="og:title"
                    content="Xavier Hazzard"
                />
                <meta
                    property="og:description"
                    content="Xavier Hazzard's website"
                />
                <meta
                    property="og:locale"
                    content="en_GB"
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
