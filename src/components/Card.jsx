import React, { useContext } from "react";
import { PokeDataContext } from "../context/DataProvider";

export const Card = ({ data }) => {
  const { getAPIResults } = useContext(PokeDataContext);
  const { name, sprites, types, base_experience, abilities, height, weight } =
    data;
  const { name: pokeType } = types?.map((item) => item.type)[0] || "";
  return (
    <div className='card bg-dark mb-3 mt-4'>
      <div className='row g-0'>
        <div className='col-md-4'>
          <img
            src={
              sprites?.other.dream_world.front_default ||
              sprites?.front_shiny ||
              sprites?.front_default
            }
            className='pokemon card-img-top vh-100 align-baseline'
            alt={name}
          />
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <h1 className='card-title display-1 text-uppercase text-danger'>
              <div className='row justify-content-center'>
                <div className='col-12'>
                  {name} | <span className="text-warning h1 align-middle">{pokeType} TYPE</span>
                </div>
              </div>
            </h1>
            <h3 className='card-subtitle mb-2 text-uppercase text-muted'>
            <span className="text-success">HEIGHT: </span>{height} ft | 
            <span className="text-success">WEIGHT: </span>{weight} pounds. | 
            <span className="text-success">EXPERIENCE: </span>{base_experience} | 
            <span className="text-success">Species: </span> {name}
            </h3>

            <div className='row justify-content-center w-75 mx-auto'>
              <div className='col-4'>
                <img
                  src={sprites?.back_default}
                  className='thumb_pokemons card-img-top'
                  alt={name}
                />
              </div>
              <div className='col-4'>
                <img
                  src={sprites?.front_shiny}
                  className='thumb_pokemons card-img-top'
                  alt={name}
                />
              </div>
              <div className='col-4'>
                <img
                  src={sprites?.front_default}
                  className='thumb_pokemons card-img-top'
                  alt={name}
                />
              </div>
            </div>
          </div>
          <h3 className='card-subtitle mb-3 text-success text-center text-uppercase mx-auto'>
            {name} has the below abilities:
          </h3>
          <div className='row w-50 mx-auto justify-content-between text-uppercase text-muted text-center bg-dark'>
            {abilities?.map((item, ind) => {
              return (
                <div key={ind} className='col-12 col-md-4 bg-dark text-info'>
                  {item.ability.name}
                </div>
              );
            })}
          </div>
          <div className='row justify-content-center mt-4'>
            <button
              type='button'
              onClick={() => getAPIResults()}
              className='btn-lg btn btn-outline-primary w-50'
            >
              GET RANDOM POKEMON
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
