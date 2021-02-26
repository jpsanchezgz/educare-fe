import './App.css';
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RegistroForm from './Pages/signup'
import NavBar from './components/navbar/index'
import Home from './Pages/home'
import FooterEducare from './components/footer/footer';
import Login from './Pages/login';
import Donar from './Pages/donar';
import Materias from './Pages/materias';

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstStae: ""
    }
  }

  render() {
    return (
      <Router>
      <div className="App container-fluid">
        <div className="row">
          <div className="container">
            

              <NavBar />

              <Switch>
                <Route path="/materias">
                  <Materias />
                </Route>
                <Route path="/donacion">
                  <Donar />
                </Route>
                <Route path="/catalogo">
                  <h1>Soy la vista de catalogo</h1>
                </Route>
               
                <Route path="/actividades">
                  <h1>Soy la vista de actividades</h1>
                </Route>
                <Route path="/signup">
                  <RegistroForm />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>

             

            
          </div>
        </div>
      </div>
      <FooterEducare />
      </Router>
      
    );
  }
}

export default App;
