import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Crew from "./components/Crew";
import Destinations from "./components/Destinations";
import Header from "./components/Header";
import Home from "./components/Home";
import Technology from "./components/Technology";


const App = () => {

  const[image,setImage] = useState('home');

  return (
    <div className="App" id={image} >
      <BrowserRouter>
        <Header idSet = {setImage}/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Home" element={<Home idSet = {setImage}/>}/>
          <Route path="/Destinations" element={<Destinations/>}/>
          <Route path="/Crew" element={<Crew/>}/>
          <Route path="/Technology" element={<Technology/>}/>
        </Routes>
        </BrowserRouter>

    </div>  
  );
} 
 
export default App;



