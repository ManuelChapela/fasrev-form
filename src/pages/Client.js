import React, {useState} from 'react'
import { Link } from "react-router-dom";


export const Client = () => {

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [question, setQuestion] = useState('');

    const handleName = (e) => {setName(e.target.value)}
    const handleMail = (e) => {setMail(e.target.value)}
    const handlePhone = (e) => {setPhone(e.target.value)}
    const handleQuestion = (e) => {setQuestion(e.target.value)}


    const handleSubmit = async () => {
        const data = {
            username: name,
            telephone: phone,
            email: mail,
            textField: question
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };

        const response = await fetch('http://localhost:3000/forms', requestOptions);
        const result = await response.json();

        console.log(result);

        if (result.OK) {
            alert('Mensaje enviado');
            setName('');
            setPhone('');
            setMail('');
            setQuestion('');
        } else alert(result.message);
    };


    return (

        <div className='admin__text'>

            <h1>Esta es la página de cliente</h1>
            <p className='admin__text-paragraph'>Escribe todos los campos y en cuanto puedas te responderemos</p>

            <form action="" className='client__form'>
                <div className="client__input-name">
                    <p>Nombre</p>
                    <input type="text" onChange={handleName} value={name} />
                </div>

                <div className="client__input-email">
                    <p>Mail</p>
                    <input type="text" onChange={handleMail} value={mail} />
                </div>

                <div className="client__input-phone">
                    <p>Teléfono</p>
                    <input type="text" onChange={handlePhone} value={phone} />
                </div>

                <div className="client__input-question">
                    <p>Consulta</p>
                    <textarea name="" id="" cols="30" rows="10" onChange={handleQuestion} value={question}></textarea>
                    {/* <input type="text" onChange={handleQuestion} value={question} /> */}
                </div>
            </form>

                <button className='btn__general'onClick={handleSubmit}>Enviar</button>

            <button className='btn__general-alt'>
                <Link className="" to="/">Ir a la home</Link>
            </button>
        </div>

)
}



