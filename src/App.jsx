import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import { Landing } from "./pages/Landing";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";
import { Contacts } from "./pages/Contacts";
import { Profile } from "./pages/Profile";
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )

}

export default App
