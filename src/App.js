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

class App extends Component {
  constructor() {
    super()
    this.state = {
      firstStae: ""
    }
  }

  render() {
    return (

      <div className="App container-fluid">
        <div className="row">
          <div className="container">
            <Router>

              <NavBar />

              <Switch>
                <Route path="/catalogo">
                  <h1>Soy la vista de catalogo</h1>
                </Route>
                <Route path="/formacion">
                  <h1>Soy la vista de formacion</h1>
                </Route>
                <Route path="/actividades">
                  <h1>Soy la vista de actividades</h1>
                </Route>
                <Route path="/signup">
                  <RegistroForm />
                </Route>
                <Route path="/login">
                  <h1>Soy la vista de login</h1>
                </Route>
                <Route exact path="/">
                  <h1>Soy home</h1>
                </Route>
              </Switch>

            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
