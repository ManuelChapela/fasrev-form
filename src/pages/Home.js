import React from 'react'
import { Link } from "react-router-dom";


export const Home = () => {
    return (
        <div>
            <h1>Bienvenido a la página de consulta y gestión de usuario. Aquí podrás elegir si eres usuario o administrador</h1>

            <button>
                <Link className="btn__main" to="/client">Soy usuario</Link>
            </button>

            <button>
                <Link className="btn__main" to="/admin">Soy admin</Link>
            </button>
        </div>
    )
}
