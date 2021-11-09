import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import backgroundVideo from "../pokemonIntro.mp4";

const Welcome = () => {
  return (
    <Fragment>
      <video id='video' loop={true} autoPlay={true} muted>
        <source src={backgroundVideo} type='video/mp4' />
      </video>
      <div className='container-fluid'>
        <Link to='/pokedeck' className='mx-auto'>
          <div className='row justify-content-center align-items-center intro-title'>
            <div className='col-12 text-center'>
              <img
                src='https://res.cloudinary.com/alvison-hunter/image/upload/v1636418425/pokemon_logo_rounded_f3yltf.png'
                className='img-fluid grow'
                alt='POKEMON LOGO ROUNDED'
              />
            </div>
          </div>
        </Link>
      </div>
    </Fragment>
  );
};

export default Welcome;
