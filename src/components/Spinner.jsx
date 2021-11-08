export const Spinner = () => {
  return (
    <div className='row w-100 align-items-center justify-content-center'>
      <div className='col-12 spinner-border text-warning' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  );
};
