"use client";
import Link from "next/link";
import {useRouter} from "next/navigation"
//import {axios} from "axios"; 
import React,{useState} from "react"

export default function logInPage(){
    
     return(
        <div className="bg-black p-4 m-4 w-[30%] mx-auto mt-32">
            <h1 className="text-2xl text-white font-bold">Login</h1>
            <form className="flex flex-col p-2 m-2">
                <input className="p-2 m-2" type="text" placeholder="Name"/>
                <input className="p-2 m-2" type="text" placeholder="Email"/>
                <button className="bg-purple-600 text-black p-2 m-2 rounded-sm cursor-pointer" >Login</button>
            </form>
            <Link className="text-white p-2 m-2" href="/signup">go to signup page</Link>
        </div>
     )

}
