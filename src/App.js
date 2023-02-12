import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            <Route path='*' element={<Home/>} />
            <Route path='/Blog' element={<Blog/> }/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
