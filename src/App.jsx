import { Route, Routes, useLocation } from "react-router-dom";
import "../css/output.css";
import SideBar from "./Components/SideBar";
import NavBar from "./Components/NavBar";
import ContactTable from "./Components/ContactTable";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Suggestion from "./Pages/Suggestion";
const App = () => {

  const location = useLocation()

  const isRegOrLogin = location.pathname== '/register' || location.pathname== '/login'


  return (
    <div className=" font-primary bg-background text-para w-full h-screen">
      {!isRegOrLogin && <NavBar  />}
      
      <div
        className="relative  mt-6"
      >
        {!isRegOrLogin && <SideBar />}
        
        <Routes>
          <Route path="/" element={<ContactTable />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/suggestion" element={<Suggestion />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
