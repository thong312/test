
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Data from './component/Data';
import Dashboard from './component/Dashboard';
import Add from './component/Add';
import Navigation from './component/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Data />}></Route>
        <Route path='/add' element={<Add />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
