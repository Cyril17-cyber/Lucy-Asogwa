import React, { useState } from "react";
import {BrowserRouter as Router} from "react-router-dom";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Nav from './components/Nav';
import MobileLinks from './components/MobileLinks';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import {projects} from "./components/Arrays";
import CaseStudy from './components/Casestudy';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import './scss/styles.css';

function App() {
  const [hamburger, setHamburger] = useState(false);
  function hamburgerCaller() {
    setHamburger((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <Router>
      <div className="App">
      <header className={!hamburger? "App-header" : "App-header burger"}>
        <Nav
         hamburgerCaller={hamburgerCaller}
         />

         {hamburger && <MobileLinks hamburgerCaller={hamburgerCaller} />}

         <Switch>
           <Route path='/' exact>
             <Home />
           </Route>

           <Route path='/about' exact>
             <About />
           </Route>

           <Route path='/work' exact>
             <Work
              projects={projects}
              />
           </Route>

           {projects.map((project, id) => {
             return (
               <Route key={id} path={project.link} exact>
                 <CaseStudy
                 key={id}
                 project={project}
                 />
               </Route>
             )
           })}

           <Route path='/contact' exact>
             <Contacts />
           </Route>
         </Switch>

         <Footer />
      </header>
    </div>
    </Router>
  );
}

export default App;
