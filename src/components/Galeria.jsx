import React from 'react';
import './Galeria.css';

function Galeria() {
return (
    <div className="galeria-container">
    <h2 className="galeria-title"></h2>
    <div className="galeria-grid">
        <div className="galeria-item">
        <img src="galleria1.jpg" alt="plato 1" />
        <div className="galeria-text">
            <h3>RestaurantDYP</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </div>
        <div className="galeria-item">
        <img src="galleria2.jpg" alt="plato 2" />
        <div className="galeria-text">
            <h3>Momentos</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </div>
        <div className="galeria-item">
        <img src="galleria3.jpg" alt="plato 3" />
        <div className="galeria-text">
            <h3>Familia</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        </div>
    </div>
    </div>
);
}

export default Galeria;
