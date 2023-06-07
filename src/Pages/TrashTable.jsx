import { useContext, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAllTrashData } from "../Services/Apis/FireStoreApi";
import { motion } from "framer-motion";
import TrashTableComponent from "../Components/TrashTableComponent";
import { StateContext } from "../Services/Context/Context";
import { useMediaQuery } from "react-responsive";

const TrashTable = () => {

  const isDesktop = useMediaQuery({
    query: '(min-width: 1537px)'
  })
  const laptop = useMediaQuery({
    query: '(min-width: 1280px)'
  })
  const tablet = useMediaQuery({
    query: '(min-width: 1024px)'
  })

  const phone = useMediaQuery({
    query: '(min-width: 768px)'
  })

  const smPhone = useMediaQuery({
    query: '(min-width: 640px)'
  })
  const [allTrash, setAllTrash] = useState([]);
  const nav = useNavigate();

  const token = localStorage.getItem("token");
  const userEmail = localStorage.getItem("userEmail");

  const { menuActive } = useContext(StateContext);

  useMemo(() => {
    getAllTrashData(setAllTrash, userEmail);
  }, []);


  return (
    <motion.div
    initial={tablet?{ marginLeft: "18%" }:{ marginLeft: 0 }}
    animate={menuActive ? { marginLeft: 0 } :( tablet?{ marginLeft: "18%" }:{ marginLeft: 0 })}
      transition={{ duration: 0.25 }}
      className={`flex-1 px-8  `}
    >
      <table className="table-auto w-full px-5 font-medium ">
        <thead>
            <tr>
                <td className="w-[30%]">Name</td>
                <td className="w-[30%]">Why is in the trash?</td>
                <td className="w-[30%]">date of deletion</td>
            </tr>
        </thead>
        <tbody>
        <tr>
            <td>
              <p className="my-3">Trash ({allTrash?.length})</p>
            </td>
          </tr>
            {allTrash?.map(trash => <TrashTableComponent key={trash.id} trash={trash}/>)}
        </tbody>
      </table>
    </motion.div>
  );
};

export default TrashTable;
