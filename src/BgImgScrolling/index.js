import './BgImgScrolling.css';
import BgImg1 from './pic/bg1.jpeg';
import BgImg2 from './pic/bg2.jpeg';
import BgImg3 from './pic/bg3.png';
import BgImg4 from './pic/bg4.jpeg';
import BgImg5 from './pic/bg5.jpeg';
import { useEffect, useState } from 'react';

// Store background images in an array
const BgImg = [BgImg1, BgImg2, BgImg3, BgImg4, BgImg5];

function BgImgScrolling() {

  const [currIndex, setCurrIndex] = useState(0);
  const [wheelDirection, setWheelDirection] = useState('');
  const [isWheeling, setIsWheeling] = useState(false);

  // Get the previous and next index
  function getPrevIndex() {
    return currIndex === 0 ? BgImg.length - 1 : currIndex - 1;
  }

  function getNextIndex() {
    return currIndex === BgImg.length - 1 ? 0 : currIndex + 1;
  }

  useEffect(() => {
    const containerDiv  = document.querySelector('.scroll-container');

    if (wheelDirection && !isWheeling) {
      setIsWheeling(true);
      containerDiv.classList.add(wheelDirection);
      setTimeout(() => {
        containerDiv.classList.remove(wheelDirection);
        const currImg = document.querySelector('.item.curr img');
        const prevImg = document.querySelector('.item.prev img');
        const nextImg = document.querySelector('.item.next img');
        currImg.src = BgImg[currIndex];
        prevImg.src = BgImg[getPrevIndex()];
        nextImg.src = BgImg[getNextIndex()];
        setIsWheeling(false);
      }, 1000);
   };
  }, [currIndex, wheelDirection]);

  return (
    <div className={`scroll-container ${wheelDirection}`} onWheel={e => {
      if (isWheeling || !e.deltaY) return;
      if (e.deltaY > 0) {
        setWheelDirection('scroll-down');
        setCurrIndex(getPrevIndex());
      } else {
        setWheelDirection('scroll-up');
        setCurrIndex(getNextIndex());
      }
    }}>
      <div className='item prev' >
        <img src={BgImg[getPrevIndex()]} alt='Background' />
      </div>
      <div className='item curr'>
        <img src={BgImg[currIndex]} alt='Background' />
      </div>
      <div className='item next'>
        <img src={BgImg[getNextIndex()]} alt='Background' />
      </div>
    </div>
  );
}

export default BgImgScrolling;
