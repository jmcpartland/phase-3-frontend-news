import React from 'react';
import Navigation from './Navigation';
import Header from './Header';
import Footer from './Footer';
import Article from './Article';
import Aside from './Aside';

function Home() {
    return (
      <div>
        <body>
          <Header />
            <div id="main">
              <Navigation />
              <Article />
              <Aside />
            </div>
          <Footer />
        </body>
      </div>
    )
}

export default Home