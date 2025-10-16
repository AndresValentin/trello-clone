import { useState,useEffect } from "react";


function Popup({isOpen,onClose,onSubmit}){

    const[email,setEmail] = useState("");

    useEffect(() => {
        if (!isOpen) return;
    });


    if (!isOpen) return null;



    return (
        <div className="modal-pass">
            <h3>Recuperar contraseña</h3>
            <form>
                <label htmlFor="forgot-email">correo</label>
                <input
                    id="forgot-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail>(e.target.value)}
                    placeholder="email"
                    required
                >
                </input>
                <button type="button">Cancelar</button>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Popup