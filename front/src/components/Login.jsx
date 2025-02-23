import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
const Login = () => {
  const [username, setUsername] = useState("");
  const [pass, setPassword] = useState("");

  return (
    <>
      <div className="h-full w-full flex justify-center items-center p-3">
        <div>
          <div className="py-[10vh] mt-4  text-black font-bold text-2xl text-center ">
            <div className="py-3">Login </div>
            <div className="flex flex-col items-center gap-6 py-[8vh]">
              <h3 className="font-semibold mr-[24vh] mt-4  capitalize">
                Username
              </h3>
              <input
                type="text"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                placeholder="username"
                className="border-1 border-black p-2 m-2 rounded-xl"
              />
              <h3 className="font-semibold mr-[24vh] mt-4  capitalize">
                Password
              </h3>

              <input
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="password"
                className="border-1 border-black p-2 m-2 rounded-xl"
              />
              <br />
              <button
                onClick={ async () => {
                  await axios
                    .post("http://localhost:3000/api/singup")
                    .then((email, password) => {
                      email = username;
                      password = pass;
                    });
                }}
                className="w-full h-[5vh] bg-black  text-white rounded-xl"
              >
                
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
