import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import backgroundVideo from "../pokemonIntro.mp4";

const Welcome = () => {
  return (
    <Fragment>
      <video id='video' loop={true} autoPlay={true} muted>
        <source src={backgroundVideo} type='video/mp4' />
      </video>
      <div className='container'>
          <Link to='/pokedeck' className='w-100 mx-auto'>
            <div className='row justify-content-center align-items-center intro-title w-100'>
            <img src="..." className="img-fluid" alt="POKEMON LOGO" />
              <div className='col-12'>
                <h1 className='text-danger display-4 small text-center'>
                  DISCOVER THE WORLD OF
                </h1>
                <h1 className='text-warning display-1 text-center'>POKEMONS</h1>
              </div>
            </div>
          </Link>
      </div>
    </Fragment>
  );
};

export default Welcome;
