import styles from "./Navbar.module.css";
import Link from "next/link";
import { useState } from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
    const [
        navOpen,
        setNavOpen,
    ] = useState(false);
    return (
        <>
            <nav
                className={
                    styles.navbar
                }
            >
                {navOpen ? (
                    <ul
                        className={
                            (styles.links,
                            styles.navOpen)
                        }
                    >
                        <li>
                            <Link href="/">
                                <a>
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a>
                                    About
                                    Me
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
                ) : (
                    <ul
                        className={
                            styles.links
                        }
                    >
                        <li>
                            <Link href="/">
                                <a>
                                    Home
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a>
                                    About
                                    Me
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
                )}
                <h1
                    className={
                        styles.title
                    }
                >
                    XCH
                </h1>
                <div
                    className={
                        styles.sliderToggle
                    }
                >
                    <FontAwesomeIcon
                        icon={
                            faChevronLeft
                        }
                        fixedWidth
                        onClick={() => {
                            setNavOpen(
                                (
                                    curVal
                                ) => {
                                    return !curVal;
                                }
                            );
                        }}
                    />
                </div>
            </nav>
        </>
    );
}
