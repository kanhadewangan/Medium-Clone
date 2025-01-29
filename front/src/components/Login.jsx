import React from "react";

const Login = () => {
  return (
    <>
      <div className="h-full w-full flex justify-center items-center p-3">
        <div>  
            <div className="py-[10vh] mt-4  text-black font-bold text-2xl text-center ">
                <div className="py-3">Login </div>
                    <div className="flex flex-col items-center gap-6 py-[8vh]">
                    <h3 className="font-semibold mr-[24vh] mt-4  capitalize">Username</h3>
                    <input type="text" placeholder="username" className="border-1 border-black p-2 m-2 rounded-xl" />
                    <h3 className="font-semibold mr-[24vh] mt-4  capitalize">Password</h3>

                    <input type="password" placeholder="password" className="border-1 border-black p-2 m-2 rounded-xl" />
                    <br />
                    <button className="w-full h-[5vh] bg-black text-white rounded-xl"> Login </button>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Login;
