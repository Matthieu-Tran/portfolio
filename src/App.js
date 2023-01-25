import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import {BrowserRouter as Router} from 'react-router-dom'
function App() {
  return (
    <>
      <Navbar />
      <About />
    </>
  );
}

export default App;
