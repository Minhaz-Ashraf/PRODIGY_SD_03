import './App.css';
import {Routes, Route} from 'react-router-dom'
import  Header  from './components/Layout/Header';
import { Home } from './pages/Home';
import List from './pages/List';
import Footer from './components/Layout/Footer';
import Update from './pages/Update';
import { ToastContainer} from 'react-toastify';

function App() {
  return (
    <div className="App">
    <ToastContainer
    position="top-center" />
    <Header/>
    <Routes>
      <Route path="/" element={<List/>}/>
      <Route path="/add" element={<Home/>} />
      <Route path="/update/:id" element={<Update/>} />
      
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
