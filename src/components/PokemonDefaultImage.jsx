import React, { Fragment } from "react";

export const PokemonDefaultImage = ({name, pokeType}) => {
  return (
    <Fragment>
            <div className='card-title display-3 text-uppercase text-danger'>
              <div className='row justify-content-center'>
                <div className='col-div2 border-bottom my-2'>
                  {name}
                  <br />
                  <p className='text-warning h2 align-middle'>
                    {pokeType} TYPE
                  </p>
                </div>
              </div>
            </div>
    </Fragment>
  );
};

