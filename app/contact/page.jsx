"use client";

import React from "react";
import Image from "next/image";

import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .email("Invalid Email format ")
    .min(1, "& Email is required"),
  message: z.string().min(1, "Message is required"),
});

const Page = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      schema.parse(formData);
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
    } catch (err) {
      setErrors(err.flatten().fieldErrors);
    }
  };

  const isValid = (name) => {
    return !errors[name] && formData[name].length > 0;
  };

  return (
    <section>
      <div className="bg-custom flex flex-col items-center w-full py-20">
        <div className="flex flex-col justify-center items-center w-[90%] sm:w-[70%] md:backdrop:w-[65%] ">
          <div className="text-4xl sm:text-5xl font-extrabold text-[#0D0E11]">
            <h1 className="text-center">Reach out with your questions,</h1>
            <h1 className="text-center">feedback, or partnership</h1>
            <h1 className="text-center">inquiries</h1>
          </div>
          <div className=" text-[#4F5569] mt-8">
            <p className="text-center">
              Got a question or feedback? Fill out the form or reach out through
              email and social
            </p>
            <p className="text-center">
              media, and we’ll get back to you as soon as possible
            </p>
          </div>
        </div>
      </div>

      <div className="w-[100%] flex flex-col lg:flex-row  flex-wrap items-center justify-around px-5 md:px-12 pb-16 mt-28">
        <div className="first w-[100%] md:w-[80%] lg:w-[45%]">
          <div className="mb-4">
            <h1 className="text-3xl font-semibold mb-4">
              Get in Touch With Us
            </h1>
            <p className="#4F5569">
              Have an inquiry? Fill out the form, and we’ll respond promptly.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="h-[525px] bg-[#FFFFFF]  shadow-2xl rounded-2xl p-6 space-y-8 w-full overflow-y-auto">
            <div className="flex flex-col">
              <label className="text-[#4F5569]">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className={`h-12 outline-none rounded-xl pl-4
                
                  ${
                    isValid("name")
                      ? "bg-[#E4FBF0] focus:outline-[#106A3D]"
                      : errors.name
                      ? "text-[#A70C0C] bg-[#FEECEC]  focus:outline-[#A70C0C]"
                      : "bg-[#F3F4F6]  focus:outline-[#7494EC]"
                  }`}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-[#A70C0C]">{errors.name}</p>}
            </div>
            <div className="flex flex-col">
              <label className="text-[#4F5569]">Email Address</label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email address"
                className={`h-12 outline-none rounded-xl pl-4
                
                  ${
                    isValid("email")
                      ? "bg-[#E4FBF0] focus:outline-[#106A3D]"
                      : errors.email
                      ? "text-[#A70C0C] bg-[#FEECEC]  focus:outline-[#A70C0C]"
                      : "bg-[#F3F4F6]  focus:outline-[#7494EC]"
                  }`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-[#A70C0C]">{errors.email}</p>}
            </div>
            <div className="flex flex-col">
              <label className="text-[#4F5569]">Message</label>
              <textarea
                type="text"
                name="message"
                placeholder="Enter your message here"
                className={`outline-none rounded-xl pl-4 min-h-[109px] max-h-[150px]resize-y
                 ${
                   isValid("message")
                     ? "bg-[#E4FBF0] focus:outline-[#106A3D]"
                     : errors.message
                     ? "text-[#A70C0C] bg-[#FEECEC]  focus:outline-[#A70C0C]"
                     : "bg-[#F3F4F6]  focus:outline-[#7494EC]"
                 }`}
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-[#A70C0C]">{errors.message}</p>
              )}
            </div>
            <div
              className="w-full h-12 bg-[#1D4ED8]  hover:bg-[#7494EC] cursor-pointer text-[#F3F4F6] flex justify-center items-center rounded-full"
              onClick={handleSubmit}
              disabled={!formData.name || !formData.email || !formData.message}>
              {isSubmitted ? "Message Sent!" : "Send Message"}
            </div>
          </form>
        </div>
        <div className="second w-[100%] lg:w-[45%] mt-16 lg:mt-0">
          <div className="mb-4">
            <h1 className="text-3xl font-semibold mb-4">
              Reach Out, Stay Updated
            </h1>
            <p className="#4F5569">
              Contact us via email or follow us on social media to stay updated.
            </p>
          </div>
          <div className="h-[525px] bg-[#FFFFFF] shadow-2xl  rounded-2xl p-6 space-y-8">
            <div className="w-full h-[72px] flex justify-between items-center bg-[#E9EEFC] rounded-2xl px-4 cursor-pointer">
              <div className="flex">
                <Image
                  alt="twitter-logo"
                  src="/icons/twitter.png"
                  width={24}
                  height={24}
                  className="min-w-[24px] min-h-[24px] w-auto h-auto"
                />
                <h1 className="text-[#06102D] font-medium ml-4">X (Twitter)</h1>
              </div>
              <Image
                alt="arrow"
                src="/icons/arrow.png"
                width={24}
                height={24}
              />
            </div>
            <div className="w-full h-[72px] flex justify-between  items-center bg-[#E9EEFC] rounded-2xl px-4 cursor-pointer">
              <div className="flex">
                <Image
                  alt="instagram-logo"
                  src="/icons/instagram.png"
                  width={24}
                  height={24}
                  className="min-w-[24px] min-h-[24px] w-auto h-auto"
                />
                <h1 className="text-[#06102D] font-medium ml-4">Instagram</h1>
              </div>
              <Image
                alt="arrow"
                src="/icons/arrow.png"
                width={24}
                height={24}
              />
            </div>
            <div className="w-full h-[72px] flex justify-between  items-center bg-[#E9EEFC] rounded-2xl px-4 cursor-pointer">
              <div className="flex">
                <Image
                  alt="phone-logo"
                  src="/icons/phone.png"
                  width={24}
                  height={24}
                  className="min-w-[24px] min-h-[24px] w-auto h-auto"
                />
                <div className="text-[#06102D] font-medium ml-4">
                  
                  <p>+234 906 555 3105 - Mohammad Salman</p>
                  <p>+234 807 546 1423 - Amina Ismail</p>
                </div>
              </div>
              <Image
                alt="arrow"
                src="/icons/arrow.png"
                width={24}
                height={24}
              />
            </div>
            <div className="w-full h-[72px] flex justify-between  items-center bg-[#E9EEFC] rounded-2xl px-4 cursor-pointer">
              <div className="flex">
                <Image
                  alt="email-logo"
                  src="/icons/email.png"
                  width={24}
                  height={24}
                  className="min-w-[24px] min-h-[24px] w-auto h-auto"
                />
                <h1 className="text-[#06102D] font-medium ml-4">
                  info@projectgenius.com.ng
                </h1>
              </div>
              <Image
                alt="arrow"
                src="/icons/arrow.png"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
