import Admin from "./pages/Admin";
import Home from "./pages/Home";
import { BrowserRouter, Route,Routes } from "react-router-dom";
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="" element={<Home/>}/>
    <Route exact path="admin" element={<Admin/>}/>
    </Routes>
    </BrowserRouter>
  )
}