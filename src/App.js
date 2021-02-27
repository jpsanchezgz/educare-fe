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
import Dashboard from './Pages/dashboard';
import Actividades from './Pages/actividades';
import Admin from './Pages/admin';

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
                <Route path="/admin">
                  <Admin />
                </Route>
                <Route path="/materias">
                  <Materias />
                </Route>
                <Route path="/donacion">
                  <Donar />
                </Route>
                <Route path="/hijo">
                  <Dashboard />
                </Route>
               
                <Route path="/actividades">
                  <Actividades />
                </Route>
                <Route path="/actividades/:id">
                  <h1>Soy la vista del detalle de la actividad</h1>
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
