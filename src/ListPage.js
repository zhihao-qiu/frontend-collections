import './App.css';
import { Link } from 'react-router-dom';

function ListPage() {

  return (
    <div className="list-group">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/ThreeDHover">3D Hover</Link></li>
        <li><Link to="/SimpleMap">Simple Canada Map</Link></li>
        <li><Link to="/BgImgScrolling">Background Image Scrolling</Link></li>
      </ul>
    </div>
  );
}

export default ListPage;
