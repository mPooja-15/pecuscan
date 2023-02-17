import React from 'react';
import "./pecuscan.css";
import Navbar from './Navbar';
import SearchBar from './Searchbar';
import Content from './Content';
import Block from './Block';
import Footer from './Footer';

function Pecuscan() {
    return (
        <>
            <Navbar />
            <SearchBar />
            <Content />
            <Block />
            <Footer />
        </>
    )
}
export default Pecuscan;