import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import {UserContextProvider}  from "./context/User";
import { Page } from "./styles/général";
import Profil from "./pages/Profil";
import Palier from "./pages/palier";
import Home from "./pages/Home";
import Stream from "./pages/Stream";

const App = () =>{
  return(
    <BrowserRouter>
      <UserContextProvider>
        <Page>      
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/palier/:id" element={<Palier/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profil" element={<Profil/>}/>
            <Route path="/stream" element={<Stream/>}/>
          </Routes>
        </Page>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App;
