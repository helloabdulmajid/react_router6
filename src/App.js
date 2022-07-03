import { BrowserRouter, Route, Routes,Navigate} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
// import Page404 from './components/Page404'
import User from './components/User';
import Filter from './components/Filter';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
      <Route path='/' element={<Home/>}/>      
      <Route path='/about' element={<About/>}/>   
      {/* <Route path='/*' element={<Page404/>}/>    */}
      <Route path='/user/:name' element={<User/>}/>   

      <Route path='/filter' element={<Filter/>}/>
      <Route path='/*' element={<Navigate to='/'/>}/>   


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
