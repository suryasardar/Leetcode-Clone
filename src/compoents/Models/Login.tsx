import { authModalState } from "@/Atoms/authModelAtom";
import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/Firebase/firebase";
import { useEffect,useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const router = useRouter();
    const setAuthModelState = useSetRecoilState(authModalState);
    const Handlecheck = (type: "login" | "register" | "forgotPassword") => {
        setAuthModelState((prev) => ({ ...prev,type }));
    }
  const Handlechange = (e:React.ChangeEvent<HTMLInputElement>) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    console.log(inputs);
    
  }
  const Handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // if (!inputs.email || !inputs.password) return alert("Please fill all fields");
    try {
      const Logged = await signInWithEmailAndPassword(inputs.email, inputs.password);
      if (!Logged) return;
      router.push("/");
    } catch (error:any) {
      alert(error.message);
    }
    

   }
    useEffect(() => {
      if(error) toast.error(error.message);
    }, [error])
  
  return (
    <form className="ml-2 px-6 pb-4" onSubmit={Handlesubmit}>
      <h3 className=" font-medium text-xl mb-2">Sign in to LeetClone</h3>
      <div>
        <label
          typeof="email"
          className="mb-2 font-medium text-sm  text-gray-300"
        >
          Your Email
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
          typeof="password"
          className=" font-medium text-sm mb-2 text-gray-300"
        >
          Your Password
        </label>
        <input
          placeholder="........"
          type="password"
          name="password"
          className=" border-2 w-full sm:text-sm rounded-lg focus:border-blue-500 p-1.5 placeholder-gray-400 bg-gray-600 border-gray-500 text-white"
          onChange={Handlechange}
        />
      </div>
      <button className="w-full bg-brand-orange my-4 rounded-lg text-md font-medium p-1">
      {loading ? "Signing in..." : "Sign In"}
      </button>
      <button className=" text-brand-orange text-sm w-full flex justify-end hover:underline " onClick={() => Handlecheck("forgotPassword")}
      type="submit">
        <a href="#">Forgot Password?</a>
          </button>
          <div className="text-sm my-4 font-medium text-gray-500">
              Not registered?<span className="text-blue-600 cursor-pointer  " onClick={()=>Handlecheck('register')}>
                  Create account
              </span>
          </div>
    </form>
  );
};
export default Login;
