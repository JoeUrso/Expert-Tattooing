import React from "react";
import "../Header/Header.scss";

export default function Header() {
    return (
        <header className="header">
            <h1 className="header__logo">Expert Tattooing</h1>
            <nav className="header__nav">
                <ul className="header__nav-list">
                    <li className="header__nav-list-item">
                        {/* <Link></Link> */}New York
                    </li>
                    <li className="header__nav-list-item">
                        {/* <Link></Link> */}Austin
                    </li>
                    <li className="header__nav-list-item">
                        {/* <Link></Link> */}Los Angeles
                    </li>
                </ul>
            </nav>
        </header>
    );
}
