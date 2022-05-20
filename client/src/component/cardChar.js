import React from "react";
//import { useDispatch } from 'react-redux';
import "../component/cardChar.css";
import { Link } from "react-router-dom";

export const CardChar = (props) => {
  //const dispatch = useDispatch();
  
  const { id, name, species, origin, image } = props;

// function handleClick(){
//   dispatch(addDogFavorite(props))
//   alert("Agregado a Favoritos con Exito!!")
// }

  return (
    <>
      <div className="container">
        <div className="card-home">
          <div className="imgBx">
            <Link to={`/characters/${id}`}>
              <img src={image} alt={name} />
            </Link>
          </div>

          <div className="contenido-card">
            <div className="titulo-fav">
              <h4>{name}</h4>
              
            </div>
            <div className="species">
              <h5>Specie: </h5>
              <div className="specie-span">
                <span>{species}</span>
              </div>
            </div>
            <div className="origin">
              <h5>Origin:</h5>
              <p>{origin}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
