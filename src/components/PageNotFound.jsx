import React, { Fragment } from "react";

export const PageNotFound = () => {
  const notFoundImage =
    "https://res.cloudinary.com/alvison-hunter/image/upload/c_scale,q_auto:eco,w_450/v1636430772/pikachu_400_fqclxj.png";
  return (
    <Fragment>
      <div className='row justify-content-between align-items-center w-100'>
      <div className='col-12 col-md-4'> <h1 className='text-danger text-center'>Pokemon not found!</h1></div>
      <div className='col-12 col-md-8'><img src={notFoundImage} className='img-fluid w-100' alt='Page Not Found' /></div>
      </div>
    </Fragment>
  );
};
