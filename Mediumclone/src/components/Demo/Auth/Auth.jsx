import React, { useState } from "react";
import Modal from "../../../utils/modal";
import { LiaTimesSolid } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import { AiOutlineMail } from "react-icons/ai";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Auth = () => {
    const [createUser, setCreateUser] = useState(false);
    const [signReq, setSignReq] = useState("");

    let content;
    
    if (signReq === "") {
        content = (
            <>
                <h2 className="text-2xl pt-[5rem]">{createUser ? "Join Medium" : "Welcome Back"}</h2>
                <div className="flex flex-col gap-4 w-fit mx-auto">
                    <Button 
                        icons={<FcGoogle className="text-xl" />} 
                        text={`${createUser ? "Sign Up " : "Sign In"} with Google`}
                    />
                    <Button 
                        icons={<MdFacebook className="text-xl text-blue-600" />}
                        text={`${createUser ? "Sign Up " : "Sign In"} with Facebook`}
                    />
                    <Button 
                        click={() => setSignReq(createUser ? "sign-up" : "sign-in")}
                        icons={<AiOutlineMail className="text-xl"/>}
                        text={`${createUser ? "Sign Up " : "Sign In"} with Email`}
                    />
                </div>
                <p>
                    {createUser ? "Already have an account " : "No account"}
                    <button
                        onClick={() => setCreateUser(!createUser)}
                        className="text-green-600 hover:text-green-700 font-bold ml-4"
                    >
                        {createUser ? "Sign in" : "Create one"}
                    </button>
                </p>
            </>
        );
    } else if (signReq === "sign-in") {
        content = <SignIn setSignReq={setSignReq} />;
    } else if (signReq === "sign-up") {
        content = <SignUp setSignReq={setSignReq} />;
    }

    return (
        <Modal>
            <section className="z-50 fixed top-10 bottom-5 left-0 md:left-[22rem]
                overflow-y-auto right-0 md:right-[22rem] bg-white shadows">
                <button className="absolute top-8 right-8 text-2x1 hover:opacity-100">
                    <LiaTimesSolid />
                </button>
                <div className="flex flex-col justify-center items-center gap-[3rem]">
                    {content}
                    <p className="md:w-[30rem] mx-auto text-center text-sm mb-[3rem]">
                        Click “Sign in” to agree to Medium’s Terms of Service and 
                        acknowledge that Medium’s Privacy Policy applies to you.
                    </p>
                </div>
            </section>
        </Modal>
    );
};

export default Auth;

const Button = ({ icons, text, click }) => {
    return (
        <button 
            onClick={click}
            className="flex items-center gap-10 sm:w-[20rem] border border-black 
            rounded-full p-2 text-sm font-medium hover:opacity-50"
        >
            {icons} {text}
        </button>
    );
};
