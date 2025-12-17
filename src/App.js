import logo from './logo.svg';
import './App.css';
import AppContext from './Context/appContext';
import { useContext } from 'react';
import Navbar from './Components/Navbar';
import Carousal from './Components/Carousal';
import Skills from './Components/Skills';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Admin from './Components/admin';
import Dashboard from './Components/dashboard';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  const context = useContext(AppContext)
  const { helloworld } = context
  console.log(helloworld)
  return (
    <div className="App">
     <Switch>
          <Route exact path="/">
     <Navbar/>
     <Carousal/>
     <Skills/>
     <About/>
     <Projects/>
     <Contact/>
     <Footer/>
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>

    </div>
  );
}

export default App;
