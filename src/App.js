import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signin from '../src/Components/Signin'
import Home from "./Components/Home";
import FrontPage from "./Components/FrontPage";

export default function App(){
  return(
    <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<FrontPage/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/Home" element={<Home />}/>
      
     
    </Routes>
    </BrowserRouter>
    </div>
  )
}