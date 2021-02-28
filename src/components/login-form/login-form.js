import {
    Link
} from 'react-router-dom'

function LoginForm ( props ) {

    return (
        <form action="registry-form">
          <div className="form-group">
            <input className="form-controle" type="text" placeholder="E-mail" name="email" onChange={props.createLogingUser} />
          </div>
          <div className="form-group text-left d-flex flex-column">
            <input className="form-controle mb-3" type="password" placeholder="Contraseña" name="password" onChange={props.createLogingUser} />
            {
              props.userIncorrect && <strong style={{color: "red"}}>Los datos son incorrectos</strong>
            }
            <span><a href="">¿Olvidaste tu contraseña?</a></span>
          </div>

          <div className="d-flex justify-content-around align-items-center">
          <Link to="/signup"><span className="first-sign-up">Registrarme</span></Link>
          <button type="button" className="loginform-button" onClick={
              () => {
                props.sendLoginUser()
              }
          }>Iniciar sesión</button>
          </div>

        </form>
    )
}

export default LoginForm