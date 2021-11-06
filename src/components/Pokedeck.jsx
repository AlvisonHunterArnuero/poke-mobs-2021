import React, { Fragment, useEffect, useContext } from "react";
import { PokeDataContext } from "../context/DataProvider";
import { Card } from "./Card";

const Pokedeck = () => {
  const { pokemonsCollection, getAPIResults } =
    useContext(PokeDataContext);

 

  useEffect(() => {
    getAPIResults();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div className='container-fluid mt-4 pt-4'>
        <div className='row w-100'>
            <Card data={pokemonsCollection} />
        </div>
      </div>
    </Fragment>
  );
};

export default Pokedeck;
