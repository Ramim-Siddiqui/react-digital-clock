import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState } from 'react';

function Herosection() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount(count + 1);
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [count]);

  const formatDigit = (number) => {
    if (number < 10) {
      return '0' + number;
    } else {
      return String(number);
    }
  };

  const hours = Math.floor(count / 3600);
  const minutes = Math.floor((count % 3600) / 60);
  const seconds = count % 60;

  return (
    <>
      <div className='row justify-content-center text-center'>
        <div className='col-md-12 col-lg-12 col-sm-12'>
          <h1 style={text}>{`${formatDigit(hours)}:${formatDigit(minutes)}:${formatDigit(seconds)}`}</h1>
        </div>
      </div>
    </>
  );
}

export default Herosection;

const text = {
  fontSize: '80px',
  paddingTop: '200px',
  fontFamily: 'Georgia',
};
