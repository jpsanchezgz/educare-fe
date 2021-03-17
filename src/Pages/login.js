import React, { useState } from "react"
import RegistryForm from "../components/registro-form/index"
import LoginForm from "../components/login-form/login-form"
import logo from "../images/EduCare-Blue-Logo 1.svg"

function Login(props) {
    return (
        <div className="row marco-login">
            <div className="col-12 mt-5">
                <div className="login-col mt-2">
                    <div className="">
                        <img src={logo} alt="Educare logo" width="100" />
                        <h3 className="mt-1">Inicia sesión</h3>
                        <p>
                            Escribe el correo y contraseña que registraste en
                            EduCaré
                        </p>
                    </div>
                    <LoginForm
                        createLogingUser={props.createLogingUser}
                        sendLoginUser={props.sendLoginUser}
                        userIncorrect={props.userIncorrect}
                    />
                </div>
            </div>
        </div>
    );
}

export default Login
