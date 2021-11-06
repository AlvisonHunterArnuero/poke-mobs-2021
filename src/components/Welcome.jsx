import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className='row justify-content-center self-align text-center'>
      <Link to='/pokerdeck' className='display-1 text-danger'>
        POKEDEX 2021
      </Link>
    </div>
  );
};

export default Welcome;