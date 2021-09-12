import React from 'react'
import { Link } from "react-router-dom";


export const Home = () => {
    return (
        <div className='home'>
            <h1>Bienvenido a la página de consulta y gestión de usuario. Aquí podrás elegir si eres usuario o administrador</h1>

            <div className='home__btns'>
                <button className='btn__general'>
                    <Link className="" to="/client">Soy usuario</Link>
                </button>

                <button className='btn__general'>
                    <Link className="" to="/admin">Soy admin</Link>
                </button>
            </div>

        </div>
    )
}
