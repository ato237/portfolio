import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './pages/Home';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import About from './pages/About';
import Contacts from './pages/Contacts';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path = "/" exact component = {Home}/>
        <Route path = "/projects"  component = {Projects}/>
        <Route path = "/blog"  component = {Blog}/>
        <Route path = "/about" component = {About}/>
        <Route path = "/contacts" component = {Contacts}/>
      </Routes>

      </Router>
  );
}

export default App;
