import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { StateContext } from "../Services/Context/Context";
import { FaPlus } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { LuBookDown } from "react-icons/lu";
import { BiInfoCircle } from "react-icons/bi";
import { MdOutlineAutoFixHigh } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BiPlus } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";

const SideBar = () => {

  const location = useLocation()
  
  const { menuActive } = useContext(StateContext);
  const [contact, setContact] = useState(false)
  const [often, setOften] = useState(false)
  const [other, setOther] = useState(false)

  const [consolidate, setConsolidate] = useState(false)
  const [trash, setTrash] = useState(false)

  useEffect(() => {
    if(location.pathname == '/') setContact(true)
    if(location.pathname=='/suggestion') setConsolidate(true)
  }, [])


  return (
    <motion.div
    className="absolute w-[16%] top-0 left-0"
      initial={{x:0}}

      animate={menuActive ? { x: -400 } : { x: 0}}
      transition={{ duration: 0.25 }}
      // className={` basis-[16%]`}
    >
      <div className="px-2">
        <button className="flex items-center justify-between gap-3 bg-button shadow px-5 py-3 rounded-full">
          <FaPlus />
          <span className="text-md text-button-text font-semibold">Adding a contact</span>
        </button>
      </div>

      <div className=" mt-5">
        <div className="">
          <Link to={'/'}>
          <button onClick={() => (setContact(true), setOften(false), setOther(false), setConsolidate(false), setTrash(false))} className={`flex items-center justify-start gap-8  px-6  rounded-e-full py-2 w-full ${contact? "bg-button text-button-text":"hover:bg-[#4f546b]"}`}>
            <FaRegUser />
            <p>Contact</p>
          </button>
          </Link>
          <button onClick={() => (setContact(false), setOften(true), setOther(false), setConsolidate(false), setTrash(false))} className={`flex items-center justify-start gap-8   px-6  rounded-e-full py-2 w-full ${often?'bg-button text-button-text' :'hover:bg-[#4f546b]'}`}>
            <RxCounterClockwiseClock />
            <p>Often</p>
          </button>
          <button  onClick={() => (setContact(false), setOften(false), setOther(true), setConsolidate(false), setTrash(false))} className={`flex items-center justify-between gap-8   px-6  rounded-e-full py-2 w-full ${other? "bg-button text-button-text ": "hover:bg-[#4f546b]"}`}>
            <div className="flex items-center justify-start gap-4">
              <LuBookDown />
              <p className="flex-1">Other Contacts</p>
            </div>
            <BiInfoCircle />
          </button>
        </div>
      </div>

      <div className="mt-6">
        <h4 className="px-6 mb-3">Clear and manage</h4>
        <Link to={'/suggestion'}>
        <button  onClick={() => (setContact(false), setOften(false), setOther(false), setConsolidate(true), setTrash(false))} className={`flex items-center justify-start gap-8    px-6  rounded-e-full py-2 w-full ${consolidate? "bg-button text-button-text": "hover:bg-[#4f546b]"}`}>
          <MdOutlineAutoFixHigh />
          <p className="truncate">To consolidate and prepare</p>
        </button>
        </Link>
        <button  onClick={() => (setContact(false), setOften(false), setOther(false), setConsolidate(false), setTrash(true))} className={`flex items-center justify-start gap-8   px-6  rounded-e-full py-2 w-full ${trash? 'bg-button text-button-text':'hover:bg-[#4f546b] '}`}>
          <RiDeleteBin6Line />
          <p>Trash can</p>
        </button>
      </div>

      <div className="flex items-center justify-between gap-8   px-6  rounded-e-full py-2 mt-8">
        <p>Indicator</p>
        <BiPlus className="text-xl font-bold" />
      </div>
    </motion.div>
  );
};

export default SideBar;
