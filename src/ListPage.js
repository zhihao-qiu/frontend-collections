import './App.css';
import { Link } from 'react-router-dom';


function ListPage() {

  return (
    <div className="list-group">
      <ul>
        <li className='mb-2'><Link to="/" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold w-60 py-2 px-4 rounded-full">Home</Link></li>
        <li className='mb-2'><Link to="/ThreeDHover" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold w-60 py-2 px-4 rounded-full">3D Hover</Link></li>
        <li className='mb-2'><Link to="/SimpleMap" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold w-60 py-2 px-4 rounded-full">Simple Canada Map</Link></li>
        <li className='mb-2'><Link to="/BgImgScrolling" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold w-60 py-2 px-4 rounded-full">Background Image Scrolling</Link></li>
      </ul>
    </div>
  );
}

export default ListPage;
