import React from "react";

export const DisplaySprites = ({ sprites, pokemonAnimatedViews, name, darkTheme }) => {
  return (
    <div className={`row justify-content-center border-bottom border-top ${darkTheme ? 'border-secondary': 'border-muted'} my-2 py-2 text-center`}>
      <div className='col-4'>
        <img
          src={pokemonAnimatedViews?.front_shiny || sprites?.front_shiny}
          className='w-25 card-img-top'
          alt={name}
        />
      </div>
      <div className='col-4'>
        <img
          src={pokemonAnimatedViews?.back_default || sprites?.back_default}
          className='w-25 card-img-top'
          alt={name}
        />
      </div>
      <div className='col-4'>
        <img
          src={pokemonAnimatedViews?.front_default || sprites?.front_default}
          className='w-25 card-img-top'
          alt={name}
        />
      </div>
    </div>
  );
};
