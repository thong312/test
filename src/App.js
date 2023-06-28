
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
import Footer from './component/Footer';
import Login from './component/Login';
import Protected from './component/Protected';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path='/' element={<Data />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/detail/:id' element={<Protected><Detail/></Protected>}></Route>
        <Route path='/add' element={<Protected><Add /></Protected>}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/news' element={<News />}></Route>
        <Route path='/dashboard' element={<Protected><Dashboard /></Protected>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
