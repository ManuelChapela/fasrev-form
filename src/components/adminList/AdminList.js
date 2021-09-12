import React from 'react';

export const AdminList = ({ item, index, showForm }) => {
    const onClickHandler = () => {
        showForm(index);
    };
    return (
        <div className='adminList__main'>
            <p>Nombre: {item.username}</p>
            <p>Mail: {item.email}</p>
            <p>
                <button className='btn__general' onClick={onClickHandler}>Responder</button>
            </p>
        </div>
    );
};