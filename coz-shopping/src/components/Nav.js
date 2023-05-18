import React, { useState, useEffect } from 'react';

import NavModal from './NavModal';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [img, setImg] = useState(null);
  const [isReactInitialized, setIsReactInitialized] = useState(false);

  useEffect(() => {
    const loadImage = () => {
      const imgSrc = process.env.PUBLIC_URL + '/logo.png';
      const imgElement = new Image();
      imgElement.onload = () => {
        setImg(imgSrc);
      };
      imgElement.src = imgSrc;
    };

    if (isReactInitialized) {
      loadImage();
    } else {
      setIsReactInitialized(true);
    }
  }, [isReactInitialized]);

  return (
    <div className='Nav'>
      <div className='heather'>
        <div className='heatherlogo'>
          <img className='logo' src={img} alt="Logo" />
          <h2>COZ Shopping</h2>
        </div>
        <div className='hamburgerlogo' onClick={() => setIsOpen(!isOpen)}>
          <img className='hamburger' src={process.env.PUBLIC_URL + '/hamburger.png'} alt="Hamburger" />
        </div>
      </div>
      {isOpen ? <NavModal /> : null}
    </div>
  );
}

export default Nav;
