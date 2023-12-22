import {connect} from '@/dbconfig/dbconfig'
import User from '@/models/userModel'
import { NextRequest,NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'

connect();

export async function POST(req : NextRequest){
    try{
        const reqBody = await req.json();
        const{username,password,email} = reqBody;
        const user = await User.findOne({email});
        if(user)
        {
            return NextResponse.json({error : "user already exists"},{status : 400})
        }
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password,salt);
        
        const newUser = new User({username,password:hashedPassword,email});
        const savedUser = await newUser.save();
        console.log(savedUser);
        return NextResponse.json({message : "user created successfully", success : true , savedUser})
    }
    catch (error : any){
        return NextResponse.json({error : error.message},{status:500});
    }
}