import React, { createContext, useState } from "react";
export const PokeDataContext = createContext();

const DataProvider = ({ children }) => {
  const [pokemonsCollection, setPokemonsCollection] = useState([]);
  const [fetchPokemon, setFetchPokemon] = useState("pikachu");
  const [selectedPokemon, setSelectedPokemon] = useState("pikachu");
  const [isLoading, setIsLoading] = useState(false);
  const [pageNotFound, setPageNotFound] = useState(false);
  const [darkTheme, setDarkTheme] = useState(true);

  // API fetch event to retrieve the data needed on this component
  const getAPIResults = async () => {
    setIsLoading(true);
    const fetchedDataResults = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${fetchPokemon}`
    );
    if (fetchedDataResults.status === 404) {
      setPageNotFound(true);
      return;
    } else {
      const res_JSON = await fetchedDataResults.json();
      setPokemonsCollection(res_JSON);
      setIsLoading(false);
      setPageNotFound(false);
      return res_JSON;
    }
  };

  const getRandomPokemon = async () => {
    setIsLoading(true);
    const rndInteger = Math.floor(Math.random() * 806 + 1);
    const fetchedDataResults = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${rndInteger}`
    );
    if (fetchedDataResults.status === 404) {
      setPageNotFound(true);
      return;
    } else {
      const res_JSON = await fetchedDataResults.json();
      setPokemonsCollection(res_JSON);
      setIsLoading(false);
      setPageNotFound(false);
      setFetchPokemon(res_JSON.name);
      return res_JSON;
    }
  };

  return (
    <PokeDataContext.Provider
      value={{
        pokemonsCollection,
        setPokemonsCollection,
        getAPIResults,
        getRandomPokemon,
        fetchPokemon,
        setFetchPokemon,
        isLoading,
        setIsLoading,
        darkTheme,
        setDarkTheme,
        selectedPokemon,
        setSelectedPokemon,
        pageNotFound,
        setPageNotFound,
      }}
    >
      {children}
    </PokeDataContext.Provider>
  );
};
export default DataProvider;
