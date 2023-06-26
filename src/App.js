
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Data from './component/Data';
import Dashboard from './component/Dashboard';
import Add from './component/Add';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Data />}></Route>
        <Route path='/add' element={<Add />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
