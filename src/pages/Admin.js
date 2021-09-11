import React from 'react'
import {AdminList} from './../components/adminList/AdminList'

export const Admin = ({data}) => {

    const datos = data;
    console.log('datadatadata', data);
    console.log('datosdatosdatos', datos);


    return (
        <div>
            <h1>This is the admin page</h1>
            <p>
                { datos.map((item, i) => {
                    <AdminList 
                            key={item[i]+i}
                            index={i}
                            item={item[i]}
                    />
                    
                    })} 
            </p>
        </div>
    )
}



