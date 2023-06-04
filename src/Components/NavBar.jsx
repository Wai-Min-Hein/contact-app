import { BiMenu } from "react-icons/bi";
import { GrCircleQuestion } from "react-icons/gr";
import { TbSettings } from "react-icons/tb";
import { TbGridDots } from "react-icons/tb";
import { BiUserCircle } from "react-icons/bi";
import { MdSearch } from "react-icons/md";





import user from "../../img/user.png";
import { useContext } from "react";
import { StateContext } from "../Services/Context/Context";
const NavBar = () => {
  const {menuActive, setMenuActive} = useContext(StateContext)

  return (
    <div className="flex justify-between items-center  gap-5 px-6 pt-2">
      <div className="flex items-center justify-start gap-3 basis-[18%]">
        <button onClick={() => setMenuActive(!menuActive)} className="p-3 hover:bg-gray-200 duration-200 rounded-full">

        <BiMenu className="text-2xl" />
        </button>
        <div className="flex justify-start items-center gap-2">
          <img src={user} alt="" className="w-[2.5rem]"/>
          <p className="text-xl">Friends</p>
        </div>
      </div>
      <div className="flex items-center justify-between flex-1">
        <div className="bg-gray-200 px-3 py-3 basis-[60%] flex items-center justify-start gap-5 rounded-md">
        <button>
          <MdSearch className="text-xl"/>
        </button>
        <input type="text" placeholder="Search" className="focus:outline-none bg-transparent flex-1" />
        </div>
        <div className="flex items-center justify-start gap-6 px-5">
            <GrCircleQuestion className="text-2xl"/>
            <TbSettings className="text-2xl"/>
        </div>

      </div>
      <div className="flex items-center gap-5">
        <TbGridDots className="text-xl"/>
        <BiUserCircle className="text-4xl"/>
      </div>
    </div>
  );
};

export default NavBar;