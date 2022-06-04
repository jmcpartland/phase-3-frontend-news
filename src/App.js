import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
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
          <Center />
          <Aside />
        </div>
        <Footer />
      </body>
    </div>
  );
}

export default App;
