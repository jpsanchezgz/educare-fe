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
  const [currentUser, setCurrentUser] = useState({
    id: "1",
    name: "Jp",
    kidName: "Gordito",
    misActividades: [
      {
        tags: ["abecedario", "números", "letras"],
        _id: "60442633318ffa0085227183",
        title: "Caperuzita Roja",
        notes: "Favor de leer este cuento antes de comer. Jugar a interpretar los roles",
        content: "Había una vez una dulce...",
        category: "Pensamiento lógico y estructurado",
        content_type: "Lectura",
        __v: 0
      },
      {
        tags: ["abecedario", "números", "letras"],
        _id: "60442633318ffa0085227183",
        title: "Los tres osos",
        notes: "Favor de leer este cuento antes de comer. Jugar a interpretar los roles",
        content: "Había una vez una dulce...",
        category: "Pensamiento lógico y estructurado",
        content_type: "Lectura",
        __v: 0
      },
      {
        tags: ["abecedario", "números", "letras"],
        _id: "60442633318ffa0085227183",
        title: "La malvada dragona",
        notes: "Favor de leer este cuento antes de comer. Jugar a interpretar los roles",
        content: "Había una vez una dulce...",
        category: "Pensamiento lógico y estructurado",
        content_type: "PDF",
        __v: 0
      },
      {
        tags: ["abecedario", "números", "letras"],
        _id: "60442633318ffa0085227183",
        title: "Cantando y bailando",
        notes: "Favor de leer este cuento antes de comer. Jugar a interpretar los roles",
        content: "Había una vez una dulce...",
        category: "Pensamiento lógico y estructurado",
        content_type: "PDF",
        __v: 0
      },
      {
        tags: ["abecedario", "números", "letras"],
        _id: "60442633318ffa0085227183",
        title: "Meditaciones con Willy",
        notes: "Favor de leer este cuento antes de comer. Jugar a interpretar los roles",
        content: "Había una vez una dulce...",
        category: "Pensamiento lógico y estructurado",
        content_type: "Video musical",
        __v: 0
      },
    ]
  })

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

  return (
    <Router>
      <div className="App container-fluid">
        <NavBar
          logout={logout}
        />

        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/materias">
            {
              token
                ? <Materias />
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
                : <Login
                  createLogingUser={createLoginHandler}
                  sendLoginUser={async () => {
                    await api.sendLoginHandler(user, setUserIncorrect);
                  }}
                  userIncorrect={userIncorrect}
                />
            }

          </Route>

          {/* Se tiene que usar exact para que no se sobreescriban las rutas ya que son similares
                En el/actividades */}
          <Route exact path="/actividades">
            {
              token
                ? <Actividades />
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
            <Home />
          </Route>
        </Switch>
      </div>
      <FooterEducare />
    </Router>

  );
}

export default App;
