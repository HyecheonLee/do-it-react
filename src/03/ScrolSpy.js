import React, {useEffect, useRef} from 'react';

const ScrollSpy = () => {
  const divRef = useRef()
  const checkPosition = () => {
    if (divRef.getBoundingClientRect().top < window.innerHeight) {
      console.log('enter')
    } else {
      console.log('exit')
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', checkPosition);
    checkPosition()
    return () => {
      window.removeEventListener('scroll', checkPosition);
    }
  });

  return (
      <div ref={divRef}/>
  );
};

export default ScrollSpy;
