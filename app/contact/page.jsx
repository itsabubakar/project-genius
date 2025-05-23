"use client";

import React from "react";
import Image from "next/image";

import { useState } from "react";
import { z } from "zod";
import Link from "next/link";
import Heading from "../components/landing_page/header";

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
       
        <div className="second  w-full md:w-[880px] md:px-[133px]  mt-16 lg:mt-0">
          <Heading 
          heading="Get in Touch With Us"
          subHeading="Have an inquiry? Fill out the form, and we’ll respond promptly."
          classname="text-center mx-auto"
          />
          <div className=" bg-[#FFFFFF] shadow-2xl  rounded-2xl p-10 space-y-8">
            <Link href="https://x.com/_ProjectGENIUS?t=x-sjh39CT6uPx2bm34eSIQ&s=08" className="w-full h-[72px] flex justify-between items-center bg-[#E9EEFC] rounded-2xl px-4 cursor-pointer">
              <div className="flex">
                <Image
                  alt="twitter-logo"
                  src="/icons/twitter.png"
                  width={24}
                  height={24}
                  className="min-w-[24px] min-h-[24px] w-auto h-auto"
                />
                <h1 className="text-[#06102D] font-medium text-[12px] sm:text-[16px]  ml-4">X (Twitter)</h1>
              </div>
              <Image
                alt="arrow"
                src="/icons/arrow.png"
                width={24}
                height={24}
              />
            </Link>
            <Link href="https://www.instagram.com/_project_genius?igsh=MW1hajRjNnRucTk0ZA==" className="w-full h-[72px] flex justify-between  items-center bg-[#E9EEFC] rounded-2xl px-4 cursor-pointer">
              <div className="flex">
                <Image
                  alt="instagram-logo"
                  src="/icons/instagram.png"
                  width={24}
                  height={24}
                  className="min-w-[24px] min-h-[24px] w-auto h-auto"
                />
                <h1 className="text-[#06102D] font-medium text-[12px] sm:text-[16px]  ml-4">Instagram</h1>
              </div>
              <Image
                alt="arrow"
                src="/icons/arrow.png"
                width={24}
                height={24}
              />
            </Link>
            <div className="w-full h-[72px] flex justify-between  items-center bg-[#E9EEFC] rounded-2xl px-4 cursor-pointer">
              <div className="flex">
                <Image
                  alt="phone-logo"
                  src="/icons/phone.png"
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px] my-auto"
                />
                <div className="text-[#06102D] font-medium  text-[12px] sm:text-[16px] ml-4">
                  
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
                <h1 className="text-[#06102D] text-[14px] sm:text-[16px] font-medium ml-4">
                  abuprojectgenius@gmail.com
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
