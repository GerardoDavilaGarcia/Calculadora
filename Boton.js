import React from 'react';
import '../hojas-de-estilo/boton.css';

function Boton(props){

    const esOperardor = valor => {
        return isNaN(valor) && (valor != '.') && (valor != '=')
    };

    return (
        <div 
            className={`boton-contenedor ${esOperardor(props.children) ? 'operador' : null}`.trimEnd()}
            onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    );
}

export default Boton