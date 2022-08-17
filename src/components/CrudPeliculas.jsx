import { useState } from 'react';
import { nanoid } from 'nanoid';
import Pelicula from './Pelicula';
import FormPelicula from './FormPelicula';
import './CrudPeliculas.css';

const CrudPeliculas = () => {
  const [peliculas, setPeliculas] = useState([]);
  const [peliculaEdit, setPeliculaEdit] = useState(null);

  const createPelicula = (pelicula) => {
    pelicula.id = nanoid();
    let newPelicula = JSON.stringify(pelicula);
    setPeliculas([...peliculas, JSON.parse(newPelicula)]);
  };

  const deletePelicula = (id) => {
    let isDelete = window.confirm('Quiere Eliminar la Pelicula?');
    if (isDelete) {
      let newPeliculas = peliculas.filter((pelicula) => pelicula.id !== id);
      setPeliculas(newPeliculas);
    } else {
      return;
    }
  };

  const editPelicula = (pelicula) => {
    // let { title, rating, poster, description } = pelicula;
    // let peli = { title, rating, poster, description };
    setPeliculaEdit(pelicula);
  };
  const updatePelicula = (pelicula) => {
    console.log(pelicula.id);
    let newData = peliculas.map((el) =>
      el.id === pelicula.id ? pelicula : el
    );
    console.log(newData);
    setPeliculas(newData);

    setPeliculaEdit(null);
  };

  return (
    <section>
      <div className="formPeliculas">
        <FormPelicula
          createPelicula={createPelicula}
          updatePelicula={updatePelicula}
          peliculaEdit={peliculaEdit}
        />
      </div>
      {peliculas.length !== 0 && (
        <div className="listaPeliculas">
          {peliculas.map((pelicula) => {
            return (
              <Pelicula
                key={pelicula.id}
                pelicula={pelicula}
                deletePelicula={deletePelicula}
                editPelicula={editPelicula}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};

export default CrudPeliculas;
