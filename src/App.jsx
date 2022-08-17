import CrudPeliculas from './components/CrudPeliculas.jsx';
import { motion } from 'framer-motion';
import Footer from './components/Footer'

function App() {
  return (
    <>
      <h1>Crud de Peliculas</h1>

      <hr />
      <motion.div animate={{ y: [50, 0] }} transition={{ duration: 1.5 }}>
        <CrudPeliculas />
        <Footer/>
      </motion.div>
    </>
  );
}

export default App;
