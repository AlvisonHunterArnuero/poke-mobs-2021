import React, { Fragment } from "react";

export const PokemonDefaultImage = ({ name, pokeType, darkTheme }) => {
  return (
    <Fragment>
      <div
        className={`card-title display-3 text-uppercase ${
          darkTheme ? "text-danger" : "text-primary"
        }`}
      >
        <div className='row justify-content-center'>
          <div className='col-12 border-bottom my-2'>
            {name}
            <br />
            <p
              className={`h2 align-middle ${
                darkTheme ? "text-warning" : "text-danger"
              }`}
            >
              {pokeType} TYPE
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
