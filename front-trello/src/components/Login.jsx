import { useState } from "react";




function Login() {

    const [name,setName] = useState("esteban");

    return(
        <div>
        <h1>Pantalla de Login</h1>
        <h2>Nombre: {name}</h2>
        <input type="text" placeholder="Ingrese su nombre"></input>
        <button onClick={() => alert(`Hola, ${name}`)}>Enviar</button>
        </div>
    )
 }
 export default Login;