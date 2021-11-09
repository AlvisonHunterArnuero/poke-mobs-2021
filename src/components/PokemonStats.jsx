import React from "react";

export const PokemonStats = ({pokeStats, darkTheme}) => {
 
    return (
        <div className={`row justify-content-center align-items-center mx-auto text-center text-danger border-top pt-3 ${darkTheme ? 'border-secondary': 'border-muted'}`}>
        <div className='col-12 col-md-6 col-lg-3'>
          <span className={`${darkTheme ? 'text-info': 'text-primary'}`}>Hit Points: </span>
          { pokeStats[0].base_stat || 0}
        </div>
        <div className='col-12 col-md-6 col-lg-3'>
          <span className={`${darkTheme ? 'text-info': 'text-primary'}`}>Attack: </span>
          { pokeStats[1].base_stat || 0}
        </div>
        <div className='col-12 col-md-6 col-lg-3'>
          <span className={`${darkTheme ? 'text-info': 'text-primary'}`}>Defense: </span>
          { pokeStats[2].base_stat || 0 }
        </div>
        <div className='col-12 col-md-6 col-lg-3'>
          <span className={`${darkTheme ? 'text-info': 'text-primary'}`}>Special Attack: </span> { pokeStats[3].base_stat || 0}
        </div>
      </div>
    );
  };