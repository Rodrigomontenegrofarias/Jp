
import './App.css';
import AppHeader from './components/header';
import 'semantic-ui-css/semantic.min.css'

import React from "react";


//import Grid from '@material-ui/core/Grid';
import Formulario from './components/Formulario';
import Biografia from './components/Biografia';
import Contactos from './components/Contactos';
import M from './components/M';
import {  Segment } from 'semantic-ui-react';
import {BrowserRouter as  Router,Switch, Route } from 'react-router-dom';






function App() {
  return (
  <Router>  
    <div className="App">
      <header className="App-header">
        <div className="App-header1">

        <M/>

        </div> 
   
      </header>

      <body>
            <div>  
                <div>
                  <div className="App-Componentes1">
                 
                    <AppHeader/>
                  </div>
                  <div className="App-Componentes1">
                    <h2>Informacion</h2>
                    
                  <h5>
                    
                  </h5>
                  </div>
                  
                </div> 
            </div>
      </body>
      <body1>
         <div>
                <Segment>
                          <div>  
                              <div>
                                <div>
                                  <Switch>
                                   
                                      
                                      <Route path="/Formulario"  component={Formulario}/> 
                                      <Route path="/Biografia"  component={Biografia}/> 
                                      <Route path="/Contactos"  component={Contactos}/> 
                                  </Switch>
                                </div>
                              </div> 
                          </div>
              
                   </Segment> 
         </div>
      </body1>
      <footer>
          <div className="App-Footer">
              <div class="ui black vertical footer segment">
                    <div class="ui center aligned container">
                        <h4 class="ui inverted header">&copy; Copyright 2021 | All rights reserved | Rodrigo Montenegro</h4>
                        <a href="https://www.facebook.com/"><i class="facebook square icon big"></i></a>
                        <a href="https://twitter.com/"><i class="twitter square icon big"></i></a>
                        <a href="https://www.linkedin.com/company/c"><i class="linkedin square icon big"></i></a>
                    </div>
                </div>  
          </div> 
             

      </footer>
    </div>
  </Router>
  
  );
}


export default App;
