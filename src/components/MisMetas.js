import React, { useState } from 'react';
import '../styles/MisMetas.css';
function MisMetas({ MisMetas, onDelete, onEdit }) {
    

    
    return (
        <div className='contenedor-principal'>
            <div>
                <h1 className='title'>Mis Metas</h1>
            </div>
            <input
                
                className="input"
                type="text"/>
            <button>Agregar</button>
            <div className='completo'></div>
            <div className='pendiente'></div>
        </div>
    );
}

export default MisMetas;


