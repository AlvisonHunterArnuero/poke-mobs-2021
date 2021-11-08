import React from "react";

export const PokemonStats = ({pokeStats}) => {
 
    return (
        <div className='row justify-content-center mx-auto text-center text-warning'>
        <div className='col-6 col-md-4 col-lg-3'>
          <span className='text-info'>Hit Points: </span>
          { pokeStats[0].base_stat || 0}
        </div>
        <div className='col-6 col-md-4 col-lg-3'>
          <span className='text-info'>Attack: </span>
          { pokeStats[1].base_stat || 0}
        </div>
        <div className='col-6 col-md-4 col-lg-3'>
          <span className='text-info'>Defense: </span>
          { pokeStats[2].base_stat || 0 }
        </div>
        <div className='col-6 col-md-4 col-lg-3'>
          <span className='text-info'>Special Attack: </span> { pokeStats[3].base_stat || 0}
        </div>
      </div>
    );
  };