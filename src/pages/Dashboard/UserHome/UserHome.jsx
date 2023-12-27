import React from 'react';
import useAuth from '../../../hooks/useAuth';

const UserHome = () => {
    const {user} = useAuth();


    return (
        <div className="w-1/2 mx-auto my-16 bg-gradient-to-r from-[#6d0feb] to-[#7071E8] px-8 lg:px-24 py-12 rounded-tl-3xl rounded-br-3xl border-[#7071E8]">
            <h2 className="text-3xl text-white font-bold ">
                <span>Hi, Welcome </span>
                {
                    user?.displayName ? user.displayName : 'Back'
                }
                <span> !!!</span>
            </h2>
        </div>
    );
};

export default UserHome;