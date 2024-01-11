import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './DetalleStyle.css';
import { Link } from 'react-router-dom';

const DetalleSerie = () => {
  const { _id } = useParams();
  const [serie, setSerie] = useState({});

  useEffect(() => {
    fetch(`https://peticiones.online/api/series/${_id}`)
      .then((response) => response.json())
      .then((json) => setSerie(json))
      .catch((error) => console.log(error));
  }, [_id]);

  return (
    <div className="seriesSola">
      <div className="imgSola">
        <img src={serie.image} alt={serie.title} />
      </div>
      <div className="textoSolo">
        <ul>
          <h2>{serie.title}</h2>
          <p>Creador: {serie.creator}</p>
          <p>Puntuación: {serie.rating}</p>
          <p>Canal: {serie.channel}</p>
        </ul>
      </div>
      <div>
        <Link to={"/"}>
          <p className="volver">Volver</p>
        </Link>
      </div>
    </div>
  );
};

export default DetalleSerie;
