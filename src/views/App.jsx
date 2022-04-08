import React from "react";
import { FaHome, FaIdCard, FaPaperPlane } from "react-icons/fa";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Content from "../components/layout/Content";
import Menu from "../components/layout/Menu";
import "./App.css";
import About from "./examples/About";
import Home from "./examples/Home";
import Posts from "./examples/Posts";

export default function App(props) {
    return (
        <div className="app">
            <Router>
                <Menu />

                <Routes>
                    <Route
                        exact
                        path="/"
                        element={
                            <Content title="Home Page" icon={<FaHome />}>
                                <Home />
                            </Content>
                        }
                    />
                    <Route
                        exact
                        path="/about/"
                        element={
                            <Content title="About" icon={<FaIdCard />}>
                                <About />
                            </Content>
                        }
                    />
                    <Route
                        exact
                        path="/posts/"
                        element={
                            <Content title="Posts" icon={<FaPaperPlane />}>
                                <Posts />
                            </Content>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}
