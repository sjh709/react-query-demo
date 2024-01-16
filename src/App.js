import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import ReactQueryPage from './ReactQueryPage';
import NormalPage from './NormalPage';

function App() {
  return (
    <div className='app'>
      <nav style={{ backgroundColor: 'beige', padding: '20px' }}>
        <Link to='/' style={{ margin: '0 20px' }}>
          Homepage
        </Link>
        <Link to='/normal' style={{ marginRight: '20px' }}>
          normal fetch
        </Link>
        <Link to='/react-query' style={{ marginRight: '20px' }}>
          React Query
        </Link>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/react-query' element={<ReactQueryPage />} />
        <Route path='/normal' element={<NormalPage />} />
      </Routes>
    </div>
  );
}

export default App;
