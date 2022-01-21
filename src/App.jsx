import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Playa from './Components/Playa/Playa';
import Plan from './Components/Plan/Plan';

function App() {
  return (
    <main>
      <header>
        <Navbar />
      </header>

      <article className='playas'>
        <Playa
          id='bocana'
          descripcion='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempore, voluptates recusandae nesciunt dolor tempora, corporis illo rem perspiciatis veniam, eaque at hic sit reprehenderit'
        />
        <Playa
          id='pianguita'
          descripcion='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempore, voluptates recusandae nesciunt dolor tempora, corporis illo rem perspiciatis veniam, eaque at hic sit reprehenderit'
        />
        <Playa
          id='magüipi'
          descripcion='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempore, voluptates recusandae nesciunt dolor tempora, corporis illo rem perspiciatis veniam, eaque at hic sit reprehenderit'
        />
        <Playa
          id='ladrilleros'
          descripcion='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempore, voluptates recusandae nesciunt dolor tempora, corporis illo rem perspiciatis veniam, eaque at hic sit reprehenderit'
        />
      </article>

      <div className="articulos">
        <article>
          <section>
            <h2 className="titulo-seccion">TIPOS DE PLAN</h2>
          </section>
          <section className="articulo">
            <Plan
              id='will-tranqui'
              plan='WILL TRANQUI'
              descripcion='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempore, voluptates recusandae'
            />
            <Plan
              id='will-romantic'
              plan='WILL ROMANTIC'
              descripcion='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempore, voluptates recusandae'
            />
            <Plan
              id='will-adventour'
              plan='WILL ADVENTOUR'
              descripcion='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempore, voluptates recusandae'
            />
          </section>
        </article>
      </div>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default App;
