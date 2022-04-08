import "./Menu.css";
import {
    FaBars,
    FaFantasyFlightGames,
    FaHouseUser,
    FaIdCard,
    FaPaperPlane,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Menu() {
    const [showMenu, setShowMenu] = useState(true);
    const [style, setStyle] = useState("dark");

    const handleStyleChange = () => {
        let newStyle;
        switch (style) {
            case "dark":
                newStyle = "light";
                break;
            case "light":
                newStyle = "nostyle";
                break;
            case "nostyle":
                newStyle = "dark";
                break;
        }
        document.getElementById("root").className = newStyle;
        setStyle(newStyle);
    };

    const handleActive = ({ isActive }) => (isActive ? "selected" : "");

    const handleSwitchButton = () => {
        setShowMenu(!showMenu);
    };

    return (
        <aside className="menu">
            <div className="logoContainer">
                <FaFantasyFlightGames className="logo" />
                <div className="mobilePanel">
                    <h3 className="title">Enter Paradise</h3>
                    <button
                        className="styleButton menuButton"
                        onClick={handleSwitchButton}
                    >
                        <FaBars />
                    </button>
                </div>
            </div>
            <nav className={"navBar " + (showMenu ? "show   " : "hide")}>
                <ul>
                    <li className="linkItem">
                        <NavLink to="/" className={handleActive}>
                            {<FaHouseUser />} Home
                        </NavLink>
                    </li>
                    <li className="linkItem">
                        <NavLink to="/about/" className={handleActive}>
                            {<FaIdCard />} About
                        </NavLink>
                    </li>
                    <li className="linkItem">
                        <NavLink to="/posts/" className={handleActive}>
                            {<FaPaperPlane />} Posts
                        </NavLink>
                    </li>
                </ul>
            </nav>
            <div className="legend">
                <small>2022&copy; all rights reserved</small>
            </div>
            <div className="legend">
                <button className="styleButton" onClick={handleStyleChange}>
                    Mode: {style}
                </button>
            </div>
        </aside>
    );
}
