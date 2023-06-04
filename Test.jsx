const Test = () => {
  return (
    <div>
      <thead className={`${checkedAmount > 0 ? "" : ""}`}>
        {checkedAmount <= 0 ? (
          <tr className="border-b-[1px]">
            <th className="text-start">Name</th>
            <th className="text-start">Email</th>
            <th className="text-start">phone number</th>
            <th className="text-start">job title and company</th>
            <motion.th
              initial={{ opacity: 0, display: "none" }}
              animate={
                menuActive
                  ? { opacity: 1, display: "inline-block" }
                  : { opacity: 0, display: "none" }
              }
              transition={{ duration: 0.45 }}
              className="text-start"
            >
              indicator
            </motion.th>

            <th colSpan={menuActive ? 1 : 2} className="text-end relative">
              <div className="flex items-center justify-end gap-4">
                <AiFillPrinter className="text-xl" />
                <FiDownload className="text-xl" />
                <FiUpload className="text-xl" />
                <HiOutlineDotsVertical
                  onClick={() => setModalActive2(!modalActive2)}
                  className="text-xl cursor-pointer"
                />
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0,
                    height: "1rem",
                    width: "2rem",
                  }}
                  animate={
                    modalActive2
                      ? {
                          opacity: 1,
                          scale: 1,
                          height: "6rem",
                          width: "15rem",
                        }
                      : {
                          opacity: 0,
                          scale: 0,
                          height: "1rem",
                          width: "2rem",
                        }
                  }
                  transition={{ duration: 0.2 }}
                  className="absolute top-[3rem]   right-0 px-4 py-6 bg-white shadow-lg rounded-sm z-50"
                >
                  <div className="">
                    <div className="flex items-center justify-start gap-5">
                      <FiUpload />
                      <span>Display pixel density</span>
                    </div>
                    <div className="flex items-center justify-start gap-5">
                      <BsColumns />
                      <span>Change column order</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </th>
          </tr>
        ) : (
          <div className="">
            <tr className="border-b-[1px]">
              <th colSpan={5} className="text-end">
                <div className="flex items-center justify-start gap-3">
                  <button>
                    <AiFillMinusSquare
                      onClick={() => setMinusClick(!minusClick)}
                      className="text-2xl"
                    />
                  </button>
                  <BsFillCaretDownFill className="text-md" />
                  <span>{checkedAmount} selected</span>
                </div>
              </th>

              <th className="flex items-center justify-end gap-3 text-end relative">
                <CgToggleSquareOff />
                <AiOutlineMail />
                <HiOutlineDotsVertical
                  onClick={() => setModalActive(!modalActive)}
                  className="text-xl cursor-pointer"
                />

                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0,
                    height: "1rem",
                    width: "2rem",
                  }}
                  animate={
                    modalActive
                      ? { opacity: 1, scale: 1, height: "9rem", width: "15rem" }
                      : { opacity: 0, scale: 0, height: "1rem", width: "2rem" }
                  }
                  transition={{ duration: 0.2 }}
                  className="absolute top-[3rem]   right-0 px-4 py-6 bg-white shadow-lg rounded-sm z-50"
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
              </th>
            </tr>


            <tr className="border-b-[1px]">
            <th colSpan={5} className="text-start">
            <div className="flex items-center justify-start gap-3">
                  <button>
                    <AiFillMinusSquare
                      onClick={() => setMinusClick(!minusClick)}
                      className="text-2xl"
                    />
                  </button>
                  <BsFillCaretDownFill className="text-md" />
                  <span>{checkedAmount} selected</span>
                </div>
            </th>
            

            <th colSpan={menuActive ? 1 : 2} className="text-end relative">
              <div className="flex items-center justify-end gap-4">
                <AiFillPrinter className="text-xl" />
                <FiDownload className="text-xl" />
                <FiUpload className="text-xl" />
                <HiOutlineDotsVertical
                  onClick={() => setModalActive2(!modalActive2)}
                  className="text-xl cursor-pointer"
                />
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0,
                    height: "1rem",
                    width: "2rem",
                  }}
                  animate={
                    modalActive2
                      ? {
                          opacity: 1,
                          scale: 1,
                          height: "6rem",
                          width: "15rem",
                        }
                      : {
                          opacity: 0,
                          scale: 0,
                          height: "1rem",
                          width: "2rem",
                        }
                  }
                  transition={{ duration: 0.2 }}
                  className="absolute top-[3rem]   right-0 px-4 py-6 bg-white shadow-lg rounded-sm z-50"
                >
                  <div className="">
                    <div className="flex items-center justify-start gap-5">
                      <FiUpload />
                      <span>Display pixel density</span>
                    </div>
                    <div className="flex items-center justify-start gap-5">
                      <BsColumns />
                      <span>Change column order</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </th>
          </tr>
          </div>
        )}
      </thead>
    </div>
  );
};

export default Test;
