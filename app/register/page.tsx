"use client";
import React, { useState } from "react";
import { useSession, signIn } from "next-auth/react";
import { createMemberProfile } from "../server/actions";

const RegisterPage = () => {
  const { data: session, status } = useSession();
  const [formData, setFormData] = useState({
    name: session?.user?.name || "",
    usn: session?.user?.usn || "",
    year: session?.user?.year || 1,
    phone: session?.user?.phone || "",
  });

  if (status == "loading")
    return (
      // TODO: Display a loader here
      <div className="flex h-screen justify-center items-center">
        <h1>Loading...</h1>
      </div>
    );

  if (!session) {
    signIn();
    return null;
  }

  const onFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!formData.name || !formData.usn || !formData.year || !formData.phone) {
      alert("Please fill all the fields");
    } else {
      await createMemberProfile(
        session.user?.email || "",
        formData.name,
        formData.usn,
        formData.year,
        formData.phone
      );
      alert("Registered Successfully");
    }
  };

  return (
    <div className="flex flex-col justify-evenly h-screen items-center pt-20">
      <h1 className="text-2xl">Register for Tudar Club</h1>
      <form onSubmit={handleRegister} className="flex flex-col gap-8">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={onFormChange}
          className="bg-black font-mono border-white/50 focus:bg-white/10 border-2 rounded-md pl-3 text-sm py-2"
        />
        <input
          type="text"
          name="usn"
          placeholder="USN"
          value={formData.usn}
          onChange={onFormChange}
          className="bg-black font-mono border-white/50 focus:bg-white/10 border-2 rounded-md pl-3 text-sm py-2"
        />
        <input
          type="number"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={onFormChange}
          className="bg-black font-mono border-white/50 focus:bg-white/10 border-2 rounded-md pl-3 text-sm py-2"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={onFormChange}
          className="bg-black font-mono border-white/50 focus:bg-white/10 border-2 rounded-md pl-3 text-sm py-2"
        />
        <button type="submit" className="bg-green-700 px-4 py-2 rounded-md">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
