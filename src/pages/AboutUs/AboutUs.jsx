import './about.css';

export default function AboutUs() {
  return (
    <div className='container'>
      <section>
        <h2>¡Bienvenidos a nuestro restaurante!</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod leo at est consectetur, ut scelerisque quam varius. Fusce ultrices elit ac lacus tincidunt, vel euismod odio consectetur. Nunc tristique odio ut justo congue, ac bibendum lacus aliquam. Integer vel lorem nec nisl accumsan efficitur. Sed non viverra lectus. Nullam vel nunc tristique, viverra nulla id, varius quam. Sed vestibulum tempor nibh, a lobortis sem fermentum id. Integer ut diam vitae dolor consequat elementum. Proin commodo sapien eros, at hendrerit arcu fringilla at.
        </p>
      </section>

      <section>
        <h2>Platos destacados</h2>
        <ul>
          <li>
            <h3>Plato 1</h3>
            <p>
              Descripción del plato 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </li>
          <li>
            <h3>Plato 2</h3>
            <p>
              Descripción del plato 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </li>
          <li>
            <h3>Plato 3</h3>
            <p>
              Descripción del plato 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </li>
        </ul>
      </section>
    </div>
  ); 
}
