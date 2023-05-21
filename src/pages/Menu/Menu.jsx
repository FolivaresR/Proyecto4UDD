import React from 'react';
import './Menu.css';


const Menu = () => {
return (
    <div className="menu">
    <h2 className="menu-title">Nuestro Menú</h2>
    <div className="menu-items">
        <div className="menu-item">
        <img src="colegiales.jpg" alt="Plato 1" />
        <h3>Plato 1</h3>
        <p>Colegiales.</p>
        <span>$10</span>
        </div>
        <div className="menu-item">
        <img src="plato2.jpg" alt="Plato 2" />
        <h3>Plato 2</h3>
        <p>pasta salsa tomate pollo tomates.</p>
        <span>$12</span>
        </div>
        <div className="menu-item">
        <img src="plato3.jpg" alt="Plato 3" /> 
        <h3>Plato 3</h3>
        <p>plato cremoso champinones.</p>
        <span>$15</span>
        </div>
    </div>
    </div>
    
);    
};
export default Menu;