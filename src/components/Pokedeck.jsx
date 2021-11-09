import React, { Fragment, useEffect, useContext } from "react";
import { PokeDataContext } from "../context/DataProvider";
import { GetRandomPokemon } from "./GetRandomPokemon";
import { PageNotFound } from "./PageNotFound";
import { DarkThemeBtn } from "./DarkThemeBtn";
import { Card } from "./Card";

const Pokedeck = () => {
  const {
    fetchPokemon,
    setFetchPokemon,
    pokemonsCollection,
    getAPIResults,
    pageNotFound,
    darkTheme,
    setPageNotFound,
  } = useContext(PokeDataContext);

  const logoURL =
    "https://res.cloudinary.com/alvison-hunter/image/upload/c_scale,q_auto:low,w_300/v1636419634/pokemon-logo-normal_trj2or.png";

  useEffect(() => {
    getAPIResults();
    // eslint-disable-next-line
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (event.target.value.length > 0) {
        getAPIResults();
      } else {
        setPageNotFound(true);
      }
    }
  };

  const onHandleChange = (e) => {
    const { value } = e.target;
    setFetchPokemon(value.toLowerCase());
  };

  return (
    <Fragment>
      <div className={`${darkTheme ? 'bg-dark': 'bg-light'} container-fluid mh-100 mw-100 vh-100`}>
      <div className='row d-flex justify-content-end align-items-center'>
          <div className='col-1'>
            <DarkThemeBtn />
          </div>
        </div>
        <div className='row justify-content-between align-items-center'>
          <div className='col-12 col-md-4 text-info my-2 text-center'>
            <img src={logoURL} className='img-fluid' alt='Pokemon Logo Long' />
          </div>
          <div className='col-12 col-md-4 text-info my-2 text-center'>
            <GetRandomPokemon />
          </div>
          <div className='col-12 col-md-4 text-info my-2 text-center'>
            <div className='input-group input-group-lg'>
              <input
                type='text'
                className='form-control'
                placeholder='Type your Pokemon Name'
                aria-label='Type your Pokemon Name'
                aria-describedby='button-addon2'
                value={fetchPokemon}
                onChange={onHandleChange}
                onKeyDown={handleKeyDown}
              />
              <button
                className='btn btn-outline-secondary'
                type='button'
                id='button-addon2'
                onClick={() => getAPIResults()}
              >
                FETCH!
              </button>
            </div>
          </div>
        </div>

        <div className='row'>
          {pokemonsCollection && !pageNotFound ? (
            <Card data={pokemonsCollection} />
          ) : (
            <PageNotFound />
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Pokedeck;
