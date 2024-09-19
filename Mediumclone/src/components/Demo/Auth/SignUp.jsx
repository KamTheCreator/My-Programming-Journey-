// import React from 'react'
import { FaRegFaceAngry } from 'react-icons/fa6';
import Input from '../../../utils/input'
import { MdKeyboardArrowLeft } from 'react-icons/md';


const SignuP = ({setSignReq}) => {
  return (
    <div className="size mt-[6rem] text-center">
        <h2 className="text-3xl">sign up with email </h2>
        <p className="w-full sm:w-[25rem] mx-auto py-[3rem] ">
            Enter Email address to get magic link 
        </p>
        <form className="flex flex-col gap-4">
            <Input type="email" title="Email"/>
            <Input type="password" title="Password"/>
            <button  className="px-4 py-1 text-sm rounded-full bg-green-700
            hover:bg-green-800 text-white w-fit mx-auto
            ">
             Sign In
            </button>

        </form>
        <button
        onClick={() => setSignReq("")}
         className="mt-5 text-sm text-green-600 hover:text-green-700
        flex items-center mx-auto
        ">
          <MdKeyboardArrowLeft/>
          All sign up Options
        </button>
    </div>
  );
};

export default SignuP;


