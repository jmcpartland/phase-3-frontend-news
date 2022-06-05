import { Routes, Route } from 'react-router-dom';
import Sources from './components/Sources';
import Articles from './components/Articles';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import Center from './components/Center';
import Aside from './components/Aside';

function App() {
  return (
    <div>
      <body>
        <Header />
        <div id="main">
          <Navigation />
          <Routes>
            <Route exact path="/" element={<Center/>} />
            <Route exact path="/sources" element={<Sources/>} />
            <Route exact path="/articles" element={<Articles/>} />
          </Routes>
          <Aside />
        </div>
        <Footer />
      </body>
    </div>
  );
}

export default App;
