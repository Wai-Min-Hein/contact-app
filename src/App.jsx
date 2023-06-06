import { Route, Routes, useLocation } from "react-router-dom";
import "../css/output.css";
import SideBar from "./Components/SideBar";
import NavBar from "./Components/NavBar";
import ContactTable from "./Components/ContactTable";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Suggestion from "./Pages/Suggestion";
import New from "./Pages/New";
import Person from "./Pages/Person";
import TrashTable from "./Pages/TrashTable";
const App = () => {

  const location = useLocation()

  const isRegOrLogin = location.pathname== '/register' || location.pathname== '/login'


  return (
    <div className=" font-primary bg-background text-para w-full  min-h-screen">
      {!isRegOrLogin && <NavBar  />}
      
      <div
        className="relative"
      >
        {!isRegOrLogin && <SideBar />}
        
        <Routes>
          <Route path="/" element={<ContactTable />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/suggestion" element={<Suggestion />} />
          <Route path="/new" element={<New />} />
        <Route path='/person/:id' element={<Person/>}/>
        <Route path='/trash' element={<TrashTable/>}/>

        </Routes>
      </div>
    </div>
  );
};

export default App;
