import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <h1>E-Study App</h1>
      <Routes>
        <Route path='/checkout'>
          <Header />
        </Route>
        <Route path='/'>
          <Header />
          <Home />
        </Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
