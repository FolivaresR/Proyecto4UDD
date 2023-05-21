import React from 'react';
import './testimonios.css';

function Testimonios() {
return (
    <section>
    <h2 className='ubicacion'>Testimonios</h2>
    <ul>
        <li>
        <blockquote>
            "Excelente comida y servicio. Definitivamente volveré".
        </blockquote>
        <cite> - Juan Pérez</cite>
        </li>
        <li>
        <blockquote>
            "Los mariscos más frescos que he probado. ¡Muy recomendado!".
        </blockquote>
        <cite> - Ana García</cite>
        </li>
    </ul>
    </section>
);
}

export default Testimonios;
