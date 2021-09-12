
import React, { useEffect, useState } from 'react';
import { AdminList } from './../components/adminList/AdminList';
import { Link } from "react-router-dom";


export const Admin = () => {
    const [data, setData] = useState([]);
    const [form, setForm] = useState(false);
    const [resp, setResp] = useState('');
    useEffect(() => {
        fetch('http://localhost:3000/forms')
            .then((response) => response.json())
            .then((result) => {
                console.log(result.Forms);
                setData(result.Forms);
            });
    }, []);

    const showForm = (index) => setForm(index);

    const handleOnChange = (e) => setResp(e.target.value);

    const handleClose = () => setForm(false);

    const handleSend = async () => {
        const sendData = {
            email: data[form].email,
            username: data[form].username,
            message: resp
        };
        console.log(sendData);
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(sendData)
        };

        const response = await fetch('http://localhost:3000/sendmail', requestOptions);
        const result = await response.json();

        console.log(result);

        if (result.OK) {
            alert('Mensaje enviado');
        } else alert(result.message);
    };

    return (
        <div className='admin__text'>
            <h1>Esta es la página de administrador.</h1>
            <p>Desde aquí podrás responder una a una todas las peticiones que te hagan los usuarios. Al responderlas, les llegará un mensaje personalizado a su email con la respuesta.</p>
            {form === false && (
                <div>
                    {data.map((item, i) => (
                        <AdminList key={item + i} index={i} item={item} showForm={showForm} />
                    ))}
                </div>
            )}
            <div>
                {form !== false && (
                    <div>
                        <h2>RESPONDER FORMULARIO</h2>
                        <div>
                            <p>Nombre: {data[form].username}</p>
                            <p>Mail: {data[form].email}</p>
                            <p>Teléfono: {data[form].telephone}</p>
                            <p>Consulta: {data[form].textField}</p>
                            <form>
                                <textarea value={resp} onChange={handleOnChange} />
                            </form>
                            <button onClick={handleSend}>Enviar</button>
                            <button onClick={handleClose}>Cerrar</button>
                        </div>
                    </div>
                )}
            </div>

            <button>
                <Link className="" to="/">Ir a la home</Link>
            </button>
        </div>
    );
};