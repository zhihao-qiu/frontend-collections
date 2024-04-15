import './App.css';
import { Link } from 'react-router-dom';

function ListPage() {
  return (
    <div className="App-header">
      <ul>
        <li><Link to="/3d-hover">3D Hover</Link></li>
      </ul>
    </div>
  );
}

export default ListPage;
