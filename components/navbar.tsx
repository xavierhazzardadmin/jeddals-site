import styles from "../styles/Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
    return (
        <>
            <nav
                className={
                    styles.navbar
                }
            >
                <ul
                    className={
                        styles.links
                    }
                >
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <a>
                                About Me
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/my-projects">
                            <a>
                                Projects
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact-me">
                            <a>
                                Contact
                                Me
                            </a>
                        </Link>
                    </li>
                </ul>
                <h1
                    className={
                        styles.title
                    }
                >
                    XCH
                </h1>
            </nav>
        </>
    );
}
