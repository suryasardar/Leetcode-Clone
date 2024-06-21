import { auth } from '@/Firebase/firebase';
import React, { useEffect, useState } from 'react';
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import {toast} from "react-toastify"
type ResetPasswordProps = {
    
};

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  const [email, setemail] = useState('');
  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
  const Resetpass = async (e: any) => {
    e.preventDefault();
    const success = await sendPasswordResetEmail(email);
    if (success) {
      toast.success('sent email')
    }
  }
  useEffect(() => {
    if(error) alert(error.message)
  },[error])
    return <form className='px-6 py-4 ml-2' onClick={Resetpass}>
        <h3 className='text-lg font-medium mb-5'>Reset Password</h3>
        <p className='text-xs font-normal mb-3'>Forgotten your password? Enter your e-mail address below,and we'll send you an e-mail allowing you to reset it.</p>
        <div>
        <label
          typeof="email"
          className=" font-medium text-sm  text-gray-300 "
        >
          Your Email
        </label>
        <input
          placeholder="Email@gmail.com"
          type="email"
          className="mb-2 border-2 w-full sm:text-sm rounded-lg focus:border-blue-500 p-1.5 placeholder-gray-400 bg-gray-600 border-gray-500 text-white"
          onChange={(e)=>setemail(e.target.value)}
        />
        </div>
        <button className='w-full rounded-md p-1.5 text-sm font-medium mt-3 bg-brand-orange'  >
            Reset Password
        </button>
    </form>
}
export default ResetPassword;