
import { getServerSession } from "next-auth";
import Link from "next/link";
import React from "react";
import { options } from "../api/auth/[...nextauth]/options";

const Navbar = async () => {
  const session = await getServerSession(options);
  return (
    <div className="bg-gray-800 text-gray-100 px-10 py-6">
      <div className="flex justify-between items-center">
        <div>Logo</div>
        <div className="flex gap-4">
          <Link href="/">Home</Link>
          <Link href="/CreateUser">Create User</Link>
          <Link href="/CreateCourse">Create Course</Link>
          <Link href="/ClientMember">Client Member</Link>
          <Link href="/Courses">Courses</Link>
          <Link href="/Member">Member</Link>
          <Link href="/Public">Public</Link>
        </div>
        {session ? (
          <Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
        ) : (
          <Link href="/api/auth/signin">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
