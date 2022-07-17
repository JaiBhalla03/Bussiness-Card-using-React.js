import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Content from './components/Content.js';

export default function Main_app(){
    return(
        <div className="main_app">
            <Header/>
            <Content/>
            <Footer/>
        </div>
    )
}