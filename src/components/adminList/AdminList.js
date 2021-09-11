import React from 'react'

export const AdminList = ({item, index, key}) => {

    console.log('AAAAA', item);


    return(
        <>

        <ol>
            <li>Nombre: {item[index].name}</li>
            <li>Mail: {item[index].mail}</li>
            <li>Teléfono: {item[index].phone}</li>
            <li>Consulta: {item[index].question}</li>
            <li>ID: {item[index].mail}</li>
        </ol>
        </>

    )
}
