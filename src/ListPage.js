import './App.css';
import { Link } from 'react-router-dom';

function ListPage() {
  return (
    <div className="App-header">
      <ul>
        <li><Link to="/ThreeDHover">3D Hover</Link></li>
        <li><Link to="/SimpleMap">Simple Canada Map</Link></li>
      </ul>
    </div>
  );
}

export default ListPage;
