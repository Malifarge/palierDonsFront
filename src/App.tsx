import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import {UserContextProvider}  from "./context/User";
import { Page } from "./styles/général";
import Profil from "./pages/Profil";

const App = () =>{
  return(
    <BrowserRouter>
      <UserContextProvider>
        <Page>      
          <Routes>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profil" element={<Profil/>}/>
          </Routes>
        </Page>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App;
