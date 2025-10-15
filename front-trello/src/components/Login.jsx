import { useState } from "react";
import "../styles/login.css";

function Login() {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [forgotPassword,SetForgotpassword] = useState(""); /// Feature olvide mi contraseña
    const [showForgotModal, setShowForgotModal] = useState(false) 


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
            onChange={(e) => {
                setUsername(e.target.value);
            }}
            placeholder="Ingresa tu usuario"
        />
        <label>contraseña</label>
        <input
            type = "password"
            value={password}
            onChange={(e) => {
                setPassword(e.target.value)
            }}
        ></input>
        </form>
        <button>Olvide mi constraseña</button>
        </div>

    )
 }
 export default Login;