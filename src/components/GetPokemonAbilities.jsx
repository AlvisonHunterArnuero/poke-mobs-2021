import React, { Fragment } from "react";

export const GetPokemonAbilities = ({ abilities, name }) => {
  return (
    <Fragment>
      <h3 className='card-subtitle mb-3 text-success text-center text-uppercase mx-auto'>
        {name} has the below abilities:
      </h3>
      <div className='row w-50 mx-auto justify-content-between text-uppercase text-muted text-center bg-dark'>
        {abilities?.map((item, ind) => {
          return (
            <div key={ind} className='col-12 col-md-4 text-info'>
              {item.ability.name}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
