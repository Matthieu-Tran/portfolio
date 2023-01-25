import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar/';
import About from './components/About';
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Navbar />
      <About />
    </Router>
  );
}

export default App;
