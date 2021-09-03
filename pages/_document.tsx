import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
} from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en-GB">
                <Head>
                    <link
                        rel="stylesheet"
                        href="https://use.typekit.net/gtw7drm.css"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
