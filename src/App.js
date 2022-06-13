import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Sources from './components/Sources';
import Source from './components/Source';
import Articles from './components/Articles';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import Aside from './components/Aside';

function App() {

  return (
      <body>
        <Header />
        <div id="main">
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/sources" element={<Sources/>} />
            <Route path="/sources/:id" element={<Source/>} />
            <Route exact path="/articles" element={<Articles/>} />
          </Routes>
          <Aside />
        </div>
        <Footer />
      </body>
  );
}

export default App;
