"use client";

import { ChevronDownIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const UserForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const res = await fetch("/api/Users", {
      method: "POST",
      body: JSON.stringify({ formData }),
      headers: { "Content-type": "application/json" },
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMsg(response.message);
    } 
    else {
      router.refresh();
      router.push("/");
    }
  };
  return (
    <>
      <div className="mt-60 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} method="post" className="space-y-6">
          <div>
            <label className="block text-sm/6 font-medium text-black">
              Name
            </label>
            <div className="mt-2">
              <input
                id="name"
                name="name"
                type="text"
                onChange={handleChange}
                required={true}
                value={formData.name}
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm/6 font-medium text-black">
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="text"
                onChange={handleChange}
                required={true}
                value={formData.email}
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="role"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Role
            </label>
            <div className="mt-2 grid grid-cols-1">
              <select
                id="role"
                name="role"
                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                onChange={handleChange}
                value={formData.role}
                required={true}
              >
                <option value="" disabled hidden>Select a role</option>
                <option value="admin">Admin</option>
                <option value="parent">Parent</option>
                {/* <option>Teacher</option> */}
              </select>
              <ChevronDownIcon
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm/6 font-medium text-black">
                Password
              </label>
              {/* <div className="text-sm">
                <a
                  href="#"
                  className="font-semibold text-indigo-400 hover:text-indigo-300"
                >
                  Forgot password?
                </a>
              </div> */}
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                required={true}
                value={formData.password}
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <input
              type="submit"
              value="Create User"
              className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            />
            {/* Create User */}
            {/* </button> */}
          </div>
        </form>

        <p className="mt-10 text-center text-sm/6 text-gray-400">{errorMsg}</p>
      </div>
    </>
  );
};

export default UserForm;
