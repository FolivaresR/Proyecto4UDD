import React from 'react';
import './Home.css';
import Ubicacion from './components/Ubicacion';
import Testimonios from './components/Testimonios';

const Home = () => {
    return (
        <div className="container">
            <main>
                <section>
                    <h1>Restaurant DyP</h1>
                    <img src="dadaxd.gif" alt="DyP" />
                    <p className='texto'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At sunt nam quidem, quo alias neque, error
                        excepturi maiores cum, est magni et. Quae id explicabo praesentium suscipit ducimus incidunt impedit.
                    </p>
                </section>
                <section>
                    <Testimonios />
                </section>
                <section>
                    <Ubicacion />
                </section>
            </main>
        </div>
    );
};

export default Home;
