import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import Course from "@/(models)/Course";

export async function POST(req) {
  try {
    const body = await req.json();
    const userData = body.formData;
    //    Confirm Data Exist
    if (!userData?.name || !userData.subTitle || !userData.description) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 } 
      );
    }

    // check for duplicate emails
    const duplicate = await Course.findOne({ name: userData.name })
      .lean()
      .exec();
    if (duplicate) {
      return NextResponse.json({ message: "Course Exist" }, { status: 409 });
    }
    await Course.create(userData);
    return NextResponse.json({message:"Course Created."},{status:201})
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
