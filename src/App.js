import { Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="App">
        <h1>project 3</h1>
        <Routes>
          <Route exact path="/" element={<Home />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
