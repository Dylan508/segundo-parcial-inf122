import React, { useState } from 'react';
import Nota from './ListaMetas';
import '../styles/ListaMetas.css';
function ListaMetas() {
    const [notas, setMetas] = useState([]);
    const [nuevaNota, setNuevaMeta] = useState('');

    const agregarMeta = () => {
        if (nuevaNota.trim() === '') return;
        setNotas([...notas, { id: Date.now(), texto: nuevaNota }]);
        setNuevaNota('');
    };

    const eliminarMeta = (id) => {
        setNotas((prevNotas) => prevNotas.filter((nota) => nota.id !== id));
    };

    };

    return (
        <div className='contenedor-principal'>
            <input
                className="input"
                type="text"
                value={nuevaMeta}
                onChange={(e) => setNuevaMeta(e.target.value)}
            />
            
            ))}
        </div>
    );
}

export default ListaMetas;