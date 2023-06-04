import { BiUserCircle } from "react-icons/bi";
import { AiOutlineStar } from "react-icons/ai";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useEffect, useState } from "react";
import { AiFillPrinter } from "react-icons/ai";
import { FiUpload } from "react-icons/fi";
import { LuBookDown } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { motion } from "framer-motion";

const ContactTableComponent = ({
  contact,
  checkedAmount,
  setCheckedAmount,
  minusClick,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setModalActive(false);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  useEffect(() => {
    if (isChecked) {
      setCheckedAmount(checkedAmount + 1);
    } else {
      if (checkedAmount > 0) setCheckedAmount(checkedAmount - 1);
    }
  }, [isChecked]);

  useEffect(() => {
    setIsChecked(false);
    setCheckedAmount(0);
  }, [minusClick]);

  return (
    <tr
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`cursor-pointer relative   ${
        isChecked || isHovered ? "bg-gray-300" : ""
      }`}
    >
      <td>
        <div className="flex items-center justify-start gap-2">
          {isChecked || isHovered ? (
            <div className="w-10 h-10 flex items-center">
              <input
                value={isChecked}
                onChange={handleCheckboxChange}
                className=" h-6 w-6 text-blue-500  rounded-sm border-gray-300 focus:ring-blue-500 inline-block "
                type="checkbox"
              />
            </div>
          ) : (
            <div className="w-10 h-10">
              <BiUserCircle className="text-4xl " />
            </div>
          )}
          {contact?.name}
        </div>
      </td>
      <td>{contact?.email}</td>
      <td>{contact?.phNo}</td>
      <td>{contact?.company}</td>
      <td className="relative"></td>
      <td >
        {(isChecked || isHovered) && (
          <div className={`flex items-center justify-end gap-4`}>
            <AiOutlineStar className="text-xl" />
            <MdOutlineModeEditOutline className="text-xl" />
            <HiOutlineDotsVertical
              onClick={() => setModalActive(!modalActive)}
              className="text-xl"
            />
            <motion.div
              initial={{ opacity: 0, scale:0, height:'1rem', width:'2rem'}}
              animate={
                modalActive
                  ? { opacity: 1,  scale:1, height:'9rem', width:'15rem' }
                  : { opacity: 0, scale:0, height:'1rem', width:'2rem' }
              }
              transition={{ duration: 0.2 }}
              className="absolute top-[3rem]   right-0 px-4 py-6 bg-white shadow-lg rounded-sm"
            >
              <div className="">
                <div className="flex items-center justify-start gap-5">
                  <AiFillPrinter />
                  <span>To print out</span>
                </div>
                <div className="flex items-center justify-start gap-5">
                  <FiUpload />
                  <span>to take out</span>
                </div>
                <div className="flex items-center justify-start gap-5">
                  <LuBookDown />
                  <span>Hide from contacts</span>
                </div>
                <div className="flex items-center justify-start gap-5">
                  <RiDeleteBin6Line />
                  <span>to delete</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </td>
    </tr>
  );
};

export default ContactTableComponent;
