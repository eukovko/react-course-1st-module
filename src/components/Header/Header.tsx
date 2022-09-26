import React from "react";
import "./style.css";
import { Link, Route, Routes } from "react-router-dom";
import Main from "../Home/Home";
import About from "../About/About";
import Cards from "../Cards/Cards";

export default function Header() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/cards">Cards</Link>
        <Link to="/about">About</Link>
      </header>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </>
  );
}
