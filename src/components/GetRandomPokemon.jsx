import React, { useContext } from "react";
import { PokeDataContext } from "../context/DataProvider";

export const GetRandomPokemon = () => {
    const { getAPIResults } = useContext(PokeDataContext);
    return (
      <div className='row justify-content-center mt-4'>
        <button
          type='button'
          onClick={() => getAPIResults()}
          className='btn-lg btn btn-outline-primary w-50'
        >
          GET RANDOM POKEMON
        </button>
      </div>
    );
  };