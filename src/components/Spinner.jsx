export const Spinner = () => {
    return (
      <div className="grid place-items-center h-screen">
    <button type='button' className='bg-transparent text-white text-2xl' disabled>
        <svg className='animate-spin h-5 w-5 mr-3' viewBox='0 0 24 24'></svg>
        Loading...
      </button>
  </div>
    
    );
  };
  