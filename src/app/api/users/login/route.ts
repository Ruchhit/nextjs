import {connect} from '@/dbconfig/dbconfig'
import User from '@/models/userModel'
import { NextRequest,NextResponse } from 'next/server'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken';

connect();

export async function POST(req : NextRequest){
    try{
        const reqBody = await req.json();
        const{password,email} = reqBody;
        const user = await User.findOne({email});
        if(!user)
        {
            return NextResponse.json({error : "user not exists"},{status : 400})
        }
        const validPassword = await bcryptjs.compare(password, user.password);
        if(!validPassword)
        {
            return NextResponse.json({error : "invalid password"},{status : 400})
        }
        // creating a token
        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email,
        }
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET!);
        
        // settings users cookies
        const response = NextResponse.json({message :"login successfully", success: true});
        response.cookies.set("token",token,{httpOnly:true});
        return response;
     }
    catch (error : any){
        return NextResponse.json({error : error.message},{status:500});
    }
}