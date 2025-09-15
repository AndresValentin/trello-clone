import { useState } from "react";

function Login() {

    const [name,setName] = useState("");
    const [mostrarSaludo,SetMostrarSaludo] = useState(false)

    //funcion para guardar el nombre del input
    const cambiarNombre = (e) => {
        setName(e.target.value)
    }

    //Funcion para mostrar el nombre del input
    const clickButton = (e) => {
        SetMostrarSaludo(true)
    }


    return(
        <div>
        <h1>Pantalla de Login</h1>
        <input 
            type="text" 
            value={name}
            onChange={cambiarNombre}
            placeholder="Ingresa tu nombre"
        ></input>

        <button 
            onClick={clickButton}
            
        >saludar</button>
        {/* EL H1 QUE APARECE/DESAPARECE */}
            {mostrarSaludo && (
                name.trim() === "" ? 
                <h1>No hay nombre aún</h1> : 
                <h1>¡Hola {name}!</h1>
            )}
        </div>
    )
 }
 export default Login;