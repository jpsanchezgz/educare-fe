import './App.css';
import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
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
import Activity from './components/activity-detail/activity';
import WarningBar from './components/warning-bar/warning-bar';
import api from './lib/api'

function DetailedActivity() {
  const { id } = useParams();
  return <Activity id={id} />
}

function App() {
  const [user, setUser] = useState({})
  const [userIncorrect, setUserIncorrect] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)

  const createLoginHandler = (event) => {
    let value = event.target.value
    let property = event.target.name
    setUser({ ...user, [property]: value })
  }

  const logout = () => {
    localStorage.removeItem("token")
    window.location.href = "/login"
  }

  const token = localStorage.getItem("token")

  useEffect(async () => {
    await api.getUserInfoHandler(token, setCurrentUser)
  }, [])

  return (
    <Router>
      <div className="App container-fluid">
        <NavBar
          logout={logout}
          token={token}
          setCurrentUser={setCurrentUser}
        />
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/materias">
            {
              token
                ? <Materias token={token} />
                : <>
                  <WarningBar
                    title="las Materias" />
                  <Login
                    createLogingUser={createLoginHandler}
                    sendLoginUser={async () => {
                      await api.sendLoginHandler(user, setUserIncorrect);
                    }}
                    userIncorrect={userIncorrect}
                  />
                </>
            }
          </Route>
          <Route path="/donacion">
            <Donar />
          </Route>
          <Route path="/hijo">
            {
              token
                ? <Dashboard
                  currentUser={currentUser}
                />
                : <>
                  <WarningBar
                    title="tu contenido" />
                  <Login
                    createLogingUser={createLoginHandler}
                    sendLoginUser={async () => {
                      await api.sendLoginHandler(user, setUserIncorrect);
                    }}
                    userIncorrect={userIncorrect}
                  />
                </>
            }

          </Route>

          {/* Se tiene que usar exact para que no se sobreescriban las rutas ya que son similares
                En el/actividades */}
          <Route exact path="/actividades">
            {
              token
                ? <Actividades token={token} />
                : <>
                  <WarningBar
                    title="las Actividades" />
                  <Login
                    createLogingUser={createLoginHandler}
                    sendLoginUser={async () => {
                      await api.sendLoginHandler(user, setUserIncorrect);
                    }}
                    userIncorrect={userIncorrect}
                  />
                </>
            }
          </Route>

          <Route exact path="/actividades/:id">
            {
              token
                ? <DetailedActivity />
                : <>
                  <WarningBar
                    title="esta Actividad" />
                  <Login
                    createLogingUser={createLoginHandler}
                    sendLoginUser={async () => {
                      await api.sendLoginHandler(user, setUserIncorrect);
                    }}
                    userIncorrect={userIncorrect}
                  />
                </>
            }
          </Route>
          <Route path="/signup">
            <RegistroForm />
          </Route>
          <Route path="/login">
            <Login
              createLogingUser={createLoginHandler}
              sendLoginUser={async () => {
                await api.sendLoginHandler(user, setUserIncorrect);
              }}
              userIncorrect={userIncorrect}
            />
          </Route>
          <Route exact path="/">
            {/* {
              token && 
              <div className="row">
                <h2 className="col-12">!Bienvenido {currentUser[1].user}!</h2>
                <p>Empieza a buscar actividades 🤓Ve a la sección de Actividades localizada en el navegador 👆 y agrega actividades a tu panel de contenido </p>
              </div>
            } */}
            <Home token={token} />
          </Route>
        </Switch>
      </div>
      <FooterEducare />
    </Router>

  );
}

export default App;
