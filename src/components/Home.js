import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import Center from './Center';
import Aside from './Aside';

function Home() {
    return (
      <div>
        <body>
          <Header />
        <div id="main">
          {/* <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/articles" element={<Article/>} />
          </Routes> */}
          <Home />
          <Center />
          <Navigation />
          <Center />
          <Aside />
        </div>
          <Footer />
        </body>
      </div>
    )
}

export default Home