'use client'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-gray-800 text-gray-100 px-10 py-6'>
      <div className='flex justify-between items-center'>
        <div>Logo</div>
        <div className='flex gap-4'>
            <Link href="/">Home</Link>
            <Link href="/CreateUser">Create User</Link>
            <Link href="/ClientMember">Client Member</Link>
            <Link href="/Member">Member</Link>
            <Link href="/Public">Public</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
