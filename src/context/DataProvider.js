import React, {createContext, useState} from 'react';
export const PokeDataContext = createContext();


const DataProvider=({ children }) =>{
  const [pokemonsCollection, setPokemonsCollection] = useState([]);
   // API fetch event to retrieve the data needed on this component
   const getAPIResults = async () => {
    const RandomId = Math.floor(Math.random() * 806 + 1)
    const fetchedDataResults = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${RandomId}`
    );
    let res_JSON = await fetchedDataResults.json();
    console.log("==>", res_JSON);
    setPokemonsCollection(res_JSON);
    return res_JSON;
  };

  return (
    <PokeDataContext.Provider
      value={{
        pokemonsCollection, setPokemonsCollection, getAPIResults
      }}
    >
      {children}
    </PokeDataContext.Provider>
  );
}
export default DataProvider;