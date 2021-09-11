import React, {useState} from 'react'

export const Client = ({dataFn}) => {

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [question, setQuestion] = useState('');


    const handleName = (e) => {setName(e.target.value)}
    const handleMail = (e) => {setMail(e.target.value)}
    const handlePhone = (e) => {setPhone(e.target.value)}
    const handleQuestion = (e) => {setQuestion(e.target.value)}

    const handleSubmit = () => {dataFn(name, mail, phone, question)}


    // console.log('name --->', name);
    // console.log('mail --->', mail);
    // console.log('phone --->', phone);
    // console.log('question --->', question);



    return (

        <>

            <h1>This is the Client page</h1>

            <form action="">
                <div className='client__input-name'>
                    <p>Nombre</p>
                    <input type="text" onChange={handleName}/>
                </div>

                <div className='client__input-email'>
                    <p>Mail</p>
                    <input type="text" onChange={handleMail}/>
                </div>

                <div className='client__input-phone'>
                    <p>Teléfono</p>
                    <input type="text" onChange={handlePhone} />
                </div>

                <div className='client__input-question'>
                    <p>Consulta</p>
                   <input type="text" onChange={handleQuestion} />
                </div>

            </form>

            
                <button onClick={handleSubmit}>Enviar</button>
        </>

)
}