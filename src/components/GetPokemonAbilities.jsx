import React, { Fragment } from "react";

export const GetPokemonAbilities = ({ abilities, name, darkTheme }) => {
  return (
    <Fragment>
      <h3 className='card-subtitle mb-3 text-success text-center text-uppercase mx-auto'>
        {name} has the below abilities:
      </h3>
      <div className={`row pb-2 mx-auto justify-content-between text-uppercase text-center border-bottom ${darkTheme ? 'border-secondary': 'border-muted'}`}>
        {abilities?.map((item, ind) => {
          return (
            <div
              key={ind}
              className={`col-12 col-md-4 fs-5 fw-lighter font-sans ${darkTheme ? 'text-warning': 'text-secondary'} text-uppercase`}
            >
              {item.ability.name}
            </div>
          );
        })}
      </div>
    </Fragment>
  );
};
