import { useState } from "react";
import { useRegisterMutation } from "../Services/Apis/authApi";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPassword_confirmation] = useState('')

  const contactData = {name, email, password, password_confirmation}

  const nav = useNavigate()

const [register] = useRegisterMutation()

const handleRegister = async (e) => {
  try {
    e.preventDefault()
    const {data} = await register(contactData)
    if(data.success) nav('/login')
  } catch (error) {
    console.log(error)
  }
 
}
  return (
    <div className="bg-transparent w-full h-screen grid place-items-center">
      <form onSubmit={handleRegister} action="" className=" w-[20rem] mx-auto">
        <div className="">
          <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" className="w-full py-2 px-3 focus:outline-none bg-transparent border bottom-2" />
        </div>
        <div className="my-5">
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email" className="w-full py-2 px-3 focus:outline-none bg-transparent border bottom-2" />
        </div>
        <div className="">
          <input  value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" className="w-full py-2 px-3 focus:outline-none bg-transparent border bottom-2" />
        </div>
        <div className="mt-5">
          <input  value={password_confirmation} onChange={(e) => setPassword_confirmation(e.target.value)} type="password" placeholder="Confirm Password" className="w-full py-2 px-3 focus:outline-none bg-transparent border bottom-2" />
        </div>
        <div className="">
          <button  className="bg-button px-3 py-2 text-button-text rounded-md mt-5">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
