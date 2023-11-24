import React,{useState} from 'react';
import Login from './Login';
import Signup from './signup';
import Home from './Home';
import Reader from './Core';
import FeedbackForm from './feedback';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './tanzeel/Navbar'
// import Home from './tanzeel/Home';
import About from './aboutme';
function App() {
  const [login,setLogin] = useState(null)
  console.log("work : ",login)
  return (
    <>
      {/* <SignupForm/>
      <Core/> */}
      <BrowserRouter>
      <Navbar login = {login}/>
      <Routes>

        <Route path="/" element={<Home login = {login}/>}></Route>
        <Route path="/login" element={<Login setLogin={setLogin}/> }></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/reader" element={<Reader login = {login}/>}></Route>
        <Route path = "/feedback" element={<FeedbackForm login = {login}/>}></Route>
        <Route path = '/about' element = {<About login = {login}/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
