import React from "react";

export const PokemonDetails = ({pokemonDetails}) => {
    return (
        <div className='row justify-content-center mx-auto text-center'>
        <div className='col-6 col-md-4 col-lg-3'>
          <span className='text-success'>Height: </span>
          {pokemonDetails.height} ft
        </div>
        <div className='col-6 col-md-4 col-lg-3'>
          <span className='text-success'>Weight: </span>
          {pokemonDetails.weight} pounds.
        </div>
        <div className='col-6 col-md-4 col-lg-3'>
          <span className='text-success'>Experience: </span>
          {pokemonDetails.base_experience}
        </div>
        <div className='col-6 col-md-4 col-lg-3'>
          <span className='text-success'>Species: </span> {pokemonDetails.name}
        </div>
      </div>
    );
  };