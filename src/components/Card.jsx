import React, { useContext } from "react";
import { PokeDataContext } from "../context/DataProvider";
import { DisplaySprites } from "./DisplaySprites";
import { GetPokemonAbilities } from "./GetPokemonAbilities";
import { GetRandomPokemon } from "./GetRandomPokemon";
import { PokemonDetails } from "./PokemonDetails";
import { PokemonStats } from "./PokemonStats";
import { Spinner } from "./Spinner";
import { PokemonDefaultImage } from "./PokemonDefaultImage";

export const Card = ({ data }) => {
  const { isLoading } = useContext(PokeDataContext);
  const {
    name,
    sprites,
    types,
    base_experience,
    abilities,
    height,
    weight,
    species,
    stats,
  } = data;

  // Declaring objects with the destructured values
  const pokemonDetails = { height, weight, base_experience, name, species };

  // Get the pokemon type from the destructured types obj
  const { name: pokeType } = types?.map((item) => item.type)[0] || {};

  // Destructuring a complicated case of several keys with hyphens on it
  const { "generation-v": generation_v } = sprites?.versions || {};
  const { "black-white": black_white } = generation_v || {};
  console.log(black_white);

  const pokemonAnimatedViews = {
    back_shiny: black_white?.animated?.back_shiny,
    back_default: black_white?.animated?.back_default,
    front_default: black_white?.animated?.front_default,
    front_shiny: black_white?.animated?.front_shiny,
  };

  return (
    <div className='card bg-transparent mb-3 mt-4'>
      <div className='row g-0'>
        <div className='col-md-4'>
          {isLoading ? (
            <Spinner />
          ) : (
            <img
              src={
                sprites?.other.dream_world.front_default ||
                sprites?.front_shiny ||
                sprites?.front_default
              }
              className='pokemon card-img-top'
              alt={name}
            />
          )}
        </div>
        <div className='col-md-8'>
          <div className='card-body'>
            <PokemonDefaultImage name={name} pokeType={pokeType} />
            <div className='card-subtitle mb-2 text-uppercase lead text-muted'>
              <PokemonDetails pokemonDetails={pokemonDetails} />
            </div>
            <h3 className='card-subtitle mb-2 text-uppercase lead text-muted'>
              {data?.stats && <PokemonStats pokeStats={stats} />}
            </h3>

            {sprites && (
              <DisplaySprites
                sprites={sprites}
                pokemonAnimatedViews={pokemonAnimatedViews}
                name={name}
              />
            )}
          </div>

          <GetPokemonAbilities abilities={abilities} name={name} />
          <GetRandomPokemon />
        </div>
      </div>
    </div>
  );
};
