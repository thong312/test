
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Data from './component/Data';
import Dashboard from './component/Dashboard';
import Add from './component/Add';
import Navigation from './component/Navigation';
import Detail from './component/Detail';
import About from './component/AboutUs';
import Contact from './component/Contact';
import News from './component/News';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Data />}></Route>
        <Route path='/detail/:id' element={<Detail/>}></Route>
        <Route path='/add' element={<Add />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/news' element={<News />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
