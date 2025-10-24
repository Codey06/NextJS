
import { readData } from "@/helper/util";
import { NextResponse } from "next/server";

export async function GET(request) {
    const getData= await readData()
   return NextResponse.json(getData, {status:200})
    
}