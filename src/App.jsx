
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import CreateResume from './components/CreateResume';
import { Error } from './components/Error';

function App() {
  return (
    <div className=' min-h-screen  bg-gradient-to-r from-gray-900 via-black to-gray-900 flex flex-col'>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create-resume' element={<CreateResume/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
   
 
    </div>
  );
}

export default App;
