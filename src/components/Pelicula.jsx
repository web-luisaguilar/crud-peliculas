import React from 'react';
import './Pelicula.css';

function Star() {
  return <span> &#9733;</span>;
}

const Pelicula = ({ pelicula, deletePelicula, editPelicula }) => {
  let { title, poster, description, rating, id } = pelicula;
  let num = parseInt(rating);
  let starEmpty = 5 - num;

  return (
    <div className="boxPelicula">
      <div className="posterPelicula">
        <img src={poster} alt={title} />
      </div>
      <div className="descriptionPelicula">
        <h3>{title}</h3>
        <hr
          style={{
            width: '90%',
            boxShadow: '0px 0px 5px cyan',
            borderColor: 'cyan',
          }}
        />
        <div className="description">
          <h4>Descripcion</h4>
          <p>{description}</p>
        </div>
        <div className="rating">
          <h4>Rating</h4>
          {[...new Array(num)].map(() => {
            return <span> &#9733;</span>;
          })}
          {[...new Array(starEmpty)].map(() => {
            return <span> &#9734;</span>;
          })}
        </div>
      </div>
      <div className="actionsPelicula">
        <button onClick={() => editPelicula(pelicula)}>Editar</button>

        <button onClick={() => deletePelicula(id)}>Eliminar</button>
      </div>
    </div>
  );
};

export default Pelicula;
