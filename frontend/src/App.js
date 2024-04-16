import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path = '/' element = {<shop/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
