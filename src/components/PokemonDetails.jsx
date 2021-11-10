import React from "react";

export const PokemonDetails = ({pokemonDetails, darkTheme}) => {
    return (
        <div className='row justify-content-center mx-auto text-center'>
        <div className='col-12 col-md-6 col-lg-3'>
          <span className={`${darkTheme ? 'text-success': 'text-dark'}`}>Height: </span>
          {pokemonDetails.height} cm.
        </div>
        <div className='col-12 col-md-6 col-lg-3'>
          <span className={`${darkTheme ? 'text-success': 'text-dark'}`}>Weight: </span>
          {pokemonDetails.weight} kg.
        </div>
        <div className='col-12 col-md-6 col-lg-3'>
          <span className={`${darkTheme ? 'text-success': 'text-dark'}`}>Experience: </span>
          {pokemonDetails.base_experience} points.
        </div>
        <div className='col-12 col-md-6 col-lg-3'>
          <span className={`${darkTheme ? 'text-success': 'text-dark'}`}>Species: </span> {pokemonDetails.name}
        </div>
      </div>
    );
  };