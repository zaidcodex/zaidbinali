import './App.css';
// import AppContext from './Context/appContext';
// import { useContext } from 'react';
import Navbar from './Components/Navbar';
import Carousal from './Components/Carousal';
import Skills from './Components/Skills';
import Services from './Components/Services';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Admin from './Components/admin';
import Dashboard from './Components/dashboard';
import {
  Switch,
  Route,
} from "react-router-dom";


function App() {


  return (
    <div className="App">
     <Switch>
          <Route exact path="/">
     <Navbar/>
     <Carousal/>
     <Services/>
     <Projects/>
     <Skills/>
     <Contact/>
     {/* <About/> */}
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
