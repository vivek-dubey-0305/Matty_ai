// src/pages/Register.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { registerUser } from "../../redux/slice/user/user.slice";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

const Register = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting:", formData);

    if (!formData.fullName || !formData.email || !formData.phone || !formData.password) {
      alert("All fields are required!");
      return;
    }

    try {
      // If using RTK's createAsyncThunk you can unwrap result for errors
      const action = await dispatch(registerUser({
        ...formData,
        phone: String(formData.phone).trim(),
      }));

      const result = unwrapResult(action);
      console.log("Register success:", result);
      // handle redirect / UI updates here
    } catch (err) {
      console.error("Register failed:", err);
      // show err.message or err payload to user
    }
  };

  return (
    // use native form to guarantee onSubmit, or make sure your Form supports onSubmit
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 max-w-md mx-auto">
      <Input
        name="fullName"
        placeholder="Full Name"
        value={formData.fullName}
        onChange={handleChange}
      />
      <Input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        name="phone"
        type="tel"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />
      <Input
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />

      <Button type="submit" className="w-full">
        Register
      </Button>
    </form>
  );
};

export default Register;
