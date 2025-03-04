import React from "react";
import { Link } from "react-router-dom";
import Login from "./login";
import { useState, useRef } from "react";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/api/signup", {
        name: username,
        email: email,
        password: password,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <div className="w-screen h-full px-20 m-19 flex flex-row  ml-5">
        <div className="w-1/3 h-full py-30  basis-1/3  ">
          <h1 className="text-center  text-4xl font-bold  ">
            Create an account
          </h1>
          <div className=" px-2 flex justify-center   py-2">
            <h4 className="mt-4 text-center">Already Have a Account?</h4>
            <Link to="/login" className="py-4 ml-5 underline">
              Login
            </Link>
          </div>
          <div className=" flex justify-center items-center h-70    w-full">
            <form ref={(e)=>{e}} className="w-full">
              <h1 className="py-1 font-semibold text-md">Username</h1>
              <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                placeholder="  Username"
                className=" h-10 w-[50vh] rounded-md border-[1px]"
              />
              <h1 className="py-1 font-semibold text-md">Email</h1>
              <input
              onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className=" h-10 w-[50vh] rounded-md border-[1px]"
              />
              <h1 className="py-1 font-semibold text-md"> Password</h1>
              <input
              onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="  Password"
                className=" h-10 w-[50vh] rounded-md border-[1px]"
              />

              <div className="flex  items-center  mt-5 text-white">
                <button  onClick={()=>{
                  handleSubmit()
                }} className="bg-black w-[50vh]  text-white font-semibold py-2 px-4 rounded-md">
                  Sign-Up
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="px-40 w-full ">
          <div className="basis-2/3 h-full  py-10">
            <h1 className="text-center   text-4xl font-bold py-36 ">
              "Thoughts become words, words become stories, and stories shape
              the world. Let’s create something meaningful together."
            </h1>
            <h3 className="px-18 mt-[-14vh] font-bold">"Gyouko"</h3>
            <h5 className="px-18">CEO,AMCD</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
