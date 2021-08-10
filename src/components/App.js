import React from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
  } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import SelectPage from "../pages/SelectPage";
import PlayPage from "../pages/PlayPage";


const App = () => {
  return (
    <>
            <Router>

                  <Switch>
                      
                      <Route exact path="/">
                        
                          <HomePage />
                    
                      </Route>

                      <Route path="/select">
                        
                          <SelectPage />
                      
                      </Route>

                      <Route path="/play">
                          
                          <PlayPage />
                      
                      </Route>
                
                  </Switch>

                </Router>
    </>
  )
}

export default App
