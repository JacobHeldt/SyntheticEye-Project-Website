import React, { useState } from 'react'

const Imgslider = ({ images }) => {

  const [current, setCurrent] = useState(0);

  const goPrevious = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const goNext = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative flex justify-center items-center w-full">
    <div className="relative h-96 w-4/5"> {/* change h-screen and w-full to your preferred size */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          className={`absolute rounded-3xl object-cover transition-opacity duration-500 ${index === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <button onClick={goPrevious} className="absolute left-0 m-4 bg-opacity-50 primary-gradient tracking-wider font-righteous px-7 py-2 text-md uppercase rounded-md hover:rounded-lg">Prev</button>
      <button onClick={goNext} className="absolute right-0 m-4 bg-white bg-opacity-50 primary-gradient tracking-wider font-righteous px-7 py-2 text-md uppercase rounded-md hover:rounded-lg">Next</button>
    </div>
    </div>
  );
}

export default Imgslider