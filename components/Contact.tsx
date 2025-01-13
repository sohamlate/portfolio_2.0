"use client"

import React, { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";


interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await axios.post(
        "https://sohamlate-server.vercel.app/api/contact",
        formData
      );
      setResponseMessage(response.data.message);
      console.log(response);
    } catch (error) {
      console.error("There was an error submitting the form!", error);
      setResponseMessage("There was an error submitting the form.");
    }

    setIsSubmitting(false);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="text-white mb-[3rem]">
      <p className="text-2xl inline-block mt-[5rem] ml-[3rem]">Contact me</p>
      <div className="bg-white h-[0.7px] ml-[3rem] mr-[3rem]"></div>
      <form onSubmit={handleSubmit} className="flex flex-col mt-[3rem] mx-[20%]">
        <label className="text-sm mb-[0.5rem]">
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="text-black mt-[1rem] p-[0.1rem] border rounded w-full"
            required
          />
        </label>
        <label className="text-sm mb-[1rem]">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="text-black mt-[0.5rem] p-[0.1rem] border rounded w-full"
            required
          />
        </label>
        <label className="text-sm mb-[0.5rem]">
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="text-black mt-[0.5rem] p-[0.3rem] border rounded w-full"
            required
          ></textarea>
        </label>
        <button
          type="submit"
          className={`bg-blue-500 text-white p-[0.1rem] mb-[2rem] rounded mt-[1rem] w-[8rem] ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
      </form>
      {responseMessage && <p className="mt-[1rem] mx-[25%]">{responseMessage}</p>}
    </section>
  );
};

export default Contact;
