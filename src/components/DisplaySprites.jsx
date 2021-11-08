import React from "react";

export const DisplaySprites = ({ sprites, pokemonAnimatedViews, name }) => {
  return (
    <div className='row justify-content-center border-bottom border-top border-danger my-3 py-3 text-center'>
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
