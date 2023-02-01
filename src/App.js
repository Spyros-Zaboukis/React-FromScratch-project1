import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='*' element={<Home/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
