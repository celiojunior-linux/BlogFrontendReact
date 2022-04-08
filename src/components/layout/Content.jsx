import React from "react";
import { FaSearch } from "react-icons/fa";
import "./Content.css";

export default function Content(props) {
    return (
        <main className="content">
            <div className="pageHeader">
                <div className="pageTitle">
                    <h1>{props.title}</h1>
                    <div className="pageIcon">{props.icon}</div>
                </div>
                <div className="searchForm">
                    <input type="search" className="searchInput" placeholder="Search something..." />
                    <button class="searchButton">{<FaSearch />}</button>
                </div>
            </div>
            <div className="pageContent">
                {props.children}
            </div>
        </main>
    );
}
