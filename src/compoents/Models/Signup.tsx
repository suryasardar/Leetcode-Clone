import { authModalState } from "@/Atoms/authModelAtom";
import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
 import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/Firebase/firebase";
import { Router } from "express";
import { useRouter } from "next/router";

type SignupProps = {};

const Signup: React.FC<SignupProps> = () => {
  const router = useRouter();
  const setAuthModelState = useSetRecoilState(authModalState);
  const [inputs, setinputs] = useState({ email: "", name: "", password: "" });
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const Handlecheck = (type: "login") => {
    setAuthModelState((prev) => ({ ...prev, type }));
  };
  const Handlechange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setinputs((prev) => ({ ...prev, [e.target.type]: e.target.value }));
    console.log(inputs);
    
  };
  const Handlesubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if(!inputs.email||!inputs.password) return alert('Please Fill the details')
    try {
      const newuser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
      if (!newuser) return;
      router.push('/');
    } catch (error: any) {
      alert(error.message);
    }
    
  };
   
  useEffect(() => {
    if(error)alert(error.message);
  },[error])
  
  return (
    <form className="ml-2 px-6 pb-4" onSubmit={Handlesubmit}>
      <h3 className=" font-medium text-xl mb-2">Signup in to Leetclone</h3>
      <div>
        <label
          typeof="email"
          className="mb-2 font-medium text-sm  text-gray-300"
        >
          Email
        </label>
        <input
          placeholder="Email@gmail.com"
          type="email"
          name="email"
          className="mb-2 border-2 w-full sm:text-sm rounded-lg focus:border-blue-500 p-1.5 placeholder-gray-400 bg-gray-600 border-gray-500 text-white"
          onChange={Handlechange}
        />
      </div>
      <div>
        <label
          typeof="name"
          className="mb-2 font-medium text-sm  text-gray-300"
        >
          Name
        </label>
        <input
          placeholder="Name"
          type="name"
          name="name"
          className="mb-2 border-2 w-full sm:text-sm rounded-lg focus:border-blue-500 p-1.5 placeholder-gray-400 bg-gray-600 border-gray-500 text-white"
          onChange={Handlechange}
        />
      </div>
      <div>
        <label
          typeof="password"
          className=" font-medium text-sm mb-2 text-gray-300"
        >
          Password
        </label>
        <input
          placeholder="........"
          type="password"
          className=" border-2 w-full sm:text-sm rounded-lg focus:border-blue-500 p-1.5 placeholder-gray-400 bg-gray-600 border-gray-500 text-white"
          onChange={Handlechange}
        />
      </div>
      <button className="w-full bg-brand-orange my-4 rounded-lg text-md font-medium p-1">
         {loading?'Registering':'Register'}
      </button>

      <div className="text-sm my-4 font-medium text-gray-500">
        Already have an account?
        <span
          className="text-blue-600 cursor-pointer "
          onClick={() => Handlecheck("login")}
        >
          Log In
        </span>
      </div>
    </form>
  );
};
export default Signup;
