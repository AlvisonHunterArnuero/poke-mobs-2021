import React, { createContext, useState } from "react";
export const PokeDataContext = createContext();

const DataProvider = ({ children }) => {
  const [pokemonsCollection, setPokemonsCollection] = useState([]);
  const [fetchPokemon, setFetchPokemon] = useState("Pikachu");
  const [isLoading, setIsLoading] = useState(false);

  // API fetch event to retrieve the data needed on this component
  const getAPIResults = async () => {
    setIsLoading(true);
    const RandomId = Math.floor(Math.random() * 806 + 1);
    const fetchedDataResults = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${RandomId}`
    );
    const res_JSON = await fetchedDataResults.json();
    setPokemonsCollection(res_JSON);
    setIsLoading(false);
    return res_JSON;
  };

  return (
    <PokeDataContext.Provider
      value={{
        pokemonsCollection,
        setPokemonsCollection,
        getAPIResults,
        fetchPokemon,
        setFetchPokemon,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </PokeDataContext.Provider>
  );
};
export default DataProvider;
