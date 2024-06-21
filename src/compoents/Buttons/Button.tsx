import React from 'react';
import { FiLogOut } from "react-icons/fi";
import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from '@/Firebase/firebase';


const Button:React.FC = () => {
    const [signOut, loading, error] = useSignOut(auth);
    const handleLogout = () => {
		signOut();
	};
    return <button className='bg-dark-fill-3 p-2 rounded-lg' onClick={handleLogout} >
        <FiLogOut className='text-yellow-600'   />

    </button>
}
export default Button;