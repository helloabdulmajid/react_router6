import { BrowserRouter, Route, Routes,Navigate} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
// import Page404 from './components/Page404'
import User from './components/User';
import Filter from './components/Filter';
import Contact from './components/Contact';
import Company from './components/Company';
import Login from './components/login';
import Protected from './components/Protected';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
      <Route path='/' element={<Protected Components={Home}/>}/>     
      <Route path='/login' element={<Login/>}/>      

      <Route path='/about' element={<Protected Components={About}/>}/>   
      {/* <Route path='/*' element={<Page404/>}/>    */}
      <Route path='/user/:name' element={<User/>}/>   

      <Route path='/filter' element={<Filter/>}/>
      <Route path='/*' element={<Navigate to='/'/>}/>  
       <Route path='/contact/' element={<Contact/>}>
        <Route path='company' element={<Company/>}/>

      
       </Route>


      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
