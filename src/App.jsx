import './App.css';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Playa from './Components/Playa/Playa';

function App() {
  return (
    <main>
      <header>
        <Navbar />
      </header>

      <article className='playas'>
        <Playa
          id='bocana'
          descripcion='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempore, voluptates recusandae nesciunt dolor tempora, corporis illo rem perspiciatis veniam, eaque at hic sit reprehenderit voluptas alias. Voluptatem, placeat modi'
        />
        <Playa
          id='pianguita'
          descripcion='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempore, voluptates recusandae nesciunt dolor tempora, corporis illo rem perspiciatis veniam, eaque at hic sit reprehenderit voluptas alias. Voluptatem, placeat modi'
        />
        <Playa
          id='magüipi'
          descripcion='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempore, voluptates recusandae nesciunt dolor tempora, corporis illo rem perspiciatis veniam, eaque at hic sit reprehenderit voluptas alias. Voluptatem, placeat modi'
        />
        <Playa
          id='ladrilleros'
          descripcion='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab tempore, voluptates recusandae nesciunt dolor tempora, corporis illo rem perspiciatis veniam, eaque at hic sit reprehenderit voluptas alias. Voluptatem, placeat modi'
        />
      </article>

      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default App;
