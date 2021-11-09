import React, { useContext } from "react";
import { PokeDataContext } from "../context/DataProvider";

export const GetRandomPokemon = () => {
  const { getRandomPokemon } = useContext(PokeDataContext);

  const onHandleClick = () => {
    getRandomPokemon();
  };
  return (
    <div className='w-100 mx-auto'>
      <button
        type='button'
        onClick={() => onHandleClick()}
        className='btn-lg btn btn-outline-primary'
      >
        GET RANDOM POKEMON
      </button>
    </div>
  );
};
