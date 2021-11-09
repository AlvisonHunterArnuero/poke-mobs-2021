import React, { useContext } from "react";
import { PokeDataContext } from "../context/DataProvider";

export const DarkThemeBtn = () => {
  const { darkTheme, setDarkTheme } = useContext(PokeDataContext);

  return (
    <div className='w-50 fs-4 my-2' onClick={()=>{setDarkTheme(!darkTheme)}}>
      {darkTheme ? (
        <i className='text-warning bi bi-brightness-high'></i>
      ) : (
        <i className='text-danger bi bi-moon-stars'></i>
      )}
    </div>
  );
};
