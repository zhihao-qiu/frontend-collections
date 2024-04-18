import landingImg from './pic/R-C.jpeg';
import './App.css';

function Landing() {
  return (
    <div className='landing'>
      <img src={landingImg} alt="R-C" style= {{width: '50%', height: '50%', marginTop: '100px'}}  />
    </div>
  );
}

export default Landing;
