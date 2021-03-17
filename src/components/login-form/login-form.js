import { Link } from "react-router-dom";

function LoginForm(props) {
  return (
    <form action="registry-form">
      <div className="form-group">
        <input
          className="form-controle"
          type="text"
          placeholder="email@domain.com"
          name="email"
          onChange={props.createLogingUser}
        />
      </div>

      <div className="form-group text-left d-flex flex-column">
        <input
          className="form-controle"
          type="password"
          placeholder="contraseña"
          name="password"
          onChange={props.createLogingUser}
        />
        {props.userIncorrect && (
          <strong style={{ color: "red" }}>Los datos son incorrectos</strong>
        )}
      </div>

      <div className="justify-content-around align-items-center">
        <div className="login-button-container text-right">
          <button
            type="button"
            className="loginform-button"
            onClick={() => {
              props.sendLoginUser();
            }}
          >
            Iniciar sesión
          </button>
        </div>

        <div className="col-12 mt-3">
          <Link to="#">
            ¿Olvidaste tu contraseña?
          </Link>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
