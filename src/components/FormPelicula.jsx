import { useState, useEffect } from 'react';
import './FormPelicula.css';

const initialForm = {
  title: '',
  rating: 1,
  poster: '',
  description: '',
};

const FormPelicula = ({ createPelicula, updatePelicula, peliculaEdit }) => {
  const [pelicula, setPelicula] = useState(initialForm);

  useEffect(() => {
    //console.log(peliculaEdit);
    if (peliculaEdit) setPelicula(peliculaEdit);
  }, [peliculaEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(pelicula);
    if (pelicula.id) {
      updatePelicula(pelicula);
    } else {
      createPelicula(pelicula);
    }
    setPelicula(initialForm);
  };

  const handleChange = (e) => {
    let { name, value } = e.target;
    setPelicula({
      ...pelicula,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        {peliculaEdit ? (
          <legend>Editar Pelicula</legend>
        ) : (
          <legend>Agregar Pelicula</legend>
        )}
        <label htmlFor="title">Titulo</label>
        <br />
        <input
          name="title"
          type="text"
          id="title"
          value={pelicula.title}
          placeholder="Nombre de la Pelicula"
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="rating">Calificacion </label>
        <br />
        <select
          name="rating"
          id="rating"
          onChange={handleChange}
          value={pelicula.rating}
          required
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <br />
        <label htmlFor="poster">Poster </label>
        <br />
        <input
          name="poster"
          type="text"
          id="poster"
          placeholder="Ingresa la URL"
          value={pelicula.poster}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="description">Descripcion</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          value={pelicula.description}
          onChange={handleChange}
          required
        ></textarea>

        <br />

        {peliculaEdit ? (
          <input type="submit" value="Actualizar" />
        ) : (
          <input type="submit" value="Agregar" />
        )}
      </fieldset>
    </form>
  );
};

export default FormPelicula;
