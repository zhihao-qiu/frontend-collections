import './App.css';
import { Link } from 'react-router-dom';


function ListPage() {

  return (
    <div className="h-screen flex flex-col items-center bg-gray-100">
      <div className='mb-4 mt-4'><Link to="/" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold w-60 py-2 px-4 rounded-full">3D Hover</Link></div>
      <div className='mb-4'><Link to="/SimpleMap" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold w-60 py-2 px-4 rounded-full">Simple Canada Map</Link></div>
      <div className='mb-4'><Link to="/BgImgScrolling" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold w-60 py-2 px-4 rounded-full">Background Image Scrolling</Link></div >
      <div className='mb-4'><Link to="/ClipPath" className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold w-60 py-2 px-4 rounded-full">ClipPath</Link></div >
    </div >
  );
}

export default ListPage;
