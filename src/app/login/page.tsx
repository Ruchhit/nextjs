"use client";
import React from "react";
import Link from "next/link";
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { toast } from 'react-hot-toast';


const LogInPage = () => {
    
  const router = useRouter();
  const[buttonDisabled , setButtonDisabled] = React.useState(false);
   const [user , setUser] = React.useState({
       email : "",
       password : "",
   })

   React.useEffect(()=>{
       if(user.email.length > 0 && user.password.length > 0 ){
           setButtonDisabled(false);
       }
       else
       {
           setButtonDisabled(true);
       }
   },[user]);

  const onLogIn = async () => {
    try {
      router.push("/profile");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="bg-black p-4 m-4 w-[30%] mx-auto mt-32">
      <h1 className="text-2xl text-white font-bold">Log In</h1>
      <form className="flex flex-col p-2 m-2" onSubmit={(e)=>{e.preventDefault()}}>
         
         <label htmlFor="email">email</label>
        <input
          className="p-2 m-2"
          id = "email"
          type="email"
          placeholder="Enter your Email"
          value={user.email}
          onChange={(event) => setUser({...user , email : event.target.value})}
        />
         <label htmlFor="password">password</label>
        <input
          className="p-2 m-2"
          id = "password"
          type="text"
          placeholder="Passowrd"
          value={user.password}
          onChange={(event) => setUser({...user , password : event.target.value})}
        />
        <button
          className="bg-purple-600 text-black p-2 m-2 rounded-sm cursor-pointer"
          onClick={onLogIn}
        >
          {buttonDisabled ? "no sign up" : "Log In" }
        </button>
      </form>
      <Link className="text-white p-2 m-2" href="/signup">
        go to signup
      </Link>
    </div>
  );
};

export default LogInPage;