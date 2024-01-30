import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import {UserContextProvider}  from "./context/User";

const App = () =>{
  return(
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App;
