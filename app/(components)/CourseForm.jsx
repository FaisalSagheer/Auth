"use client";

import { ChevronDownIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const CourseForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    subTitle: "",
    description: "",
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

    const res = await fetch("/api/Courses", {
      method: "POST",
      body: JSON.stringify({ formData }),
      headers: { "Content-type": "application/json" },
    });

    if (!res.ok) {
      const response = await res.json();
      setErrorMsg(response.message);
    } else {
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
              Subtitle
            </label>
            <div className="mt-2">
              <input
                id="subTitle"
                name="subTitle"
                type="text"
                onChange={handleChange}
                required={true}
                value={formData.subTitle}
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm/6 font-medium text-black">
                Description
              </label>
            </div>
            <div className="mt-2">
              <textarea
                id="description"
                name="description"
                type="text"
                onChange={handleChange}
                required={true}
                value={formData.description}
                className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-black/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <input
              type="submit"
              value="Create Course"
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

export default CourseForm;
