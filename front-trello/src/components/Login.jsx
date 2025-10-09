import { useState } from "react";
import "../styles/login.css";

function Login() {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [forgotPassword,SetForgotpassword] = useState("");

    const handleSubmit = (e) => {
        //validar campos
        if(!username || !password){
            alert("Por favor completa todos los campos")
        }

        //acciones del login 
    }

    return(
        <div>
        <h1>Iniciar Sesion</h1>
        <form>
        <label>Usuario</label>
        <input 
            type="text" 
            value={username}
            onChange={setUsername}
            placeholder="Ingresa tu usuario"
        ></input>
        <label>contraseña</label>
        <input
            type = "password"
            value={password}
            onChange={setPassword}
        ></input>
        </form>


        </div>
    )
 }
 export default Login;