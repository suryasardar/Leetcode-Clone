import { authModalState } from "@/Atoms/authModelAtom";
import AuthModel from "@/compoents/Models/AuthModel";
import Navbar from "@/compoents/Navbar";
import { auth } from "@/Firebase/firebase";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRecoilValue } from "recoil";

type AuthPageProps = {};

const AuthPage: React.FC<AuthPageProps> =  () => {
  const authmodel = useRecoilValue(authModalState);
  const router = useRouter();
  const [user, loading, error] = useAuthState(auth);
  const [pageload, setpageload] = useState(true);
console.log(user);


  useEffect(() => {
    if (user) router.push("/");
    if (!loading && !user) setpageload(false);
  }, [user, router,loading]);

  if (pageload) return null;

  return (
    <div className=" bg-gradient-to-b from-zinc-600 to bg-yellow-300 h-screen text-white relative">
      <div className="max-w-7xl mx-auto ">
        <Navbar />
      </div>
      <div className="flex items-center justify-center select-none h-[calc(100vh-5rem)] pointer-events-none">
        <img src="/hero.png" alt="log" />
      </div>
      {authmodel.isOpen && <AuthModel />}
    </div>
  );
};
export default AuthPage;
