import React from 'react';
import './ubicacion.css';

function Ubicacion() {
return (
    <section>
    <h2 className='ubicacion'>Ubicación y horarios</h2>
    <p className='ubicacion'>Estamos ubicados en Av. Principal 123, Ciudad de México.</p>
    <p className='ubicacion'>Horarios:</p>
    <ul>
        <li>Lunes a viernes: 11am - 9pm</li>
        <li>Sábado y domingo: 12pm - 10pm</li>
    </ul>
    </section>
);
}

export default Ubicacion;
