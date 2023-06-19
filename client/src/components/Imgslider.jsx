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
    <div className="relative">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt=""
          className={`absolute w-full h-full object-cover transition-opacity duration-500 ${index === current ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      <button onClick={goPrevious} className="absolute left-0 m-4 bg-white bg-opacity-50 p-2 rounded-full">Prev</button>
      <button onClick={goNext} className="absolute right-0 m-4 bg-white bg-opacity-50 p-2 rounded-full">Next</button>
    </div>
  );
}

export default Imgslider