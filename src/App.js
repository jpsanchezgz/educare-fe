import './App.css';
import React, { useState, useEffect } from 'react' 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Link,
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

function DetailedActivity(){
  const { id } = useParams();
  return <Activity id = {id} />
}

function App () {
  const [ user, setUser ] = useState({})
  const [isLogged, setIsLogged] = useState(false)
  const [userIncorrect, setUserIncorrect] = useState(false)
  const history = useHistory() 

  const createLoginHandler = ( event ) => {
      let value = event.target.value
      let property = event.target.name
      setUser( {...user, [property] : value} )
  }
  
  const sendLoginHandler = () => {
      const requestObject = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify( user )
      };


      fetch('http://apieducare.mybluemix.net/auth/admin/login', requestObject)
          .then( data => {
            return data.json()
          })
          .then( data => {
            if (data.success) {
              setIsLogged(true)
              console.log(data.data.token)
              localStorage.setItem("token", data.data.token)
              // history.push("/materias"
              window.location.href = "http://localhost:3000/"
            } else {
              console.log("Tus datos son incorrectos.")
              setUserIncorrect(true)
            }
          })
           
  }
  const logout = () => {
    setIsLogged(false)
    localStorage.removeItem("token")
    window.location.href = "http://localhost:3000/login"
  }

    return (
      <Router>
      <div className="App container-fluid">
        <div className="row">
          <div className="container">
            

              <NavBar 
              logout={logout}
              Logged={isLogged}/>

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

                {/* Se tiene que usar exact para que no se sobreescriban las rutas ya que son similares
                En el/actividades */}                
                <Route exact path="/actividades">
                  <Actividades />
                </Route>

                <Route exact path="/actividades/:id">
                  <DetailedActivity/>
                </Route>

                <Route path="/signup">
                  <RegistroForm />
                </Route>
                <Route path="/login">
                  <Login 
                  createLogingUser={createLoginHandler}
                  sendLoginUser={sendLoginHandler}
                  userIncorrect={userIncorrect}
                  />
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

export default App;
