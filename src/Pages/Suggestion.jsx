import { motion } from "framer-motion"
import { useContext } from "react";
import { StateContext } from "../Services/Context/Context";

const Suggestion = () => {
  const { menuActive } = useContext(StateContext);

  return (
    <motion.div
    initial={{ marginLeft: "20%" }}
    animate={menuActive ? { marginLeft: 0 } : { marginLeft: "20%" }}
    transition={{ duration: 0.25 }}
     className="text-para px-8">
      Suggestions
    </motion.div>
  )
}

export default Suggestion
