import { useState } from "react";
import "./popup";
import "../styles/login.css";
import Popup from "./popup";

function Login() {

    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
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
        <button type="button" onClick={(e) => {
            setShowForgotModal(true)
        }}
        >Olvide mi constraseña
        </button>
        <Popup></Popup>
        </div>

    )
 }
 export default Login;