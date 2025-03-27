"use client"

import Link from "next/link";
import Logo from "../ui/logo";
import Image from "next/image";

import Menu from "../../public/svg/menu.svg";
import { useState } from "react";
import Footer from "../footer";
import { motion } from "framer-motion";
import slideLeft from "../motion/slideLeft";

function Layout({children}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const navClass = "hover:text-primary transition duration-300 py-6";


    return (
        <html lang="en">
          <head>
            <link rel="icon" href="public/favicon/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="true"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Outfit:wght@100..900&display=swap"
              rel="stylesheet"
            />
    
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="true"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
              rel="stylesheet"
            />
          </head>
          <body>
            <header
              className="sticky top-0 py-3 px-[16px] sm:px-[32px] md:px-[40px]
                font-outfit flex justify-between items-center bg-white z-50"
            >
              <Logo classname="text-xl sm:text-[28px] lg:text-2xl"/>
    
              <div className="flex gap-[32px] items-center">
                <nav
                  className="hidden md:flex text-greyscale_title gap-[32px]
                    font-medium"
                >
                  <Link className={`${navClass}`} href="/events">
                    Events
                  </Link>{/*
                  <Link className={`${navClass}`} href="/">
                    Partners & Sponsors
                  </Link>*/}
                  <Link className={`${navClass}`} href="/contact">
                    Contact Us
                  </Link>
                  <Link className={`${navClass}`} href="/about">
                    About Us
                  </Link>
                </nav>
    
                <div>
                  <Image
                    src={Menu}
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden"
                    alt="menu icon"
                  />
                </div>
              </div>
            </header>
    
            {menuOpen && (
              <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={slideLeft}
              transition={{duration: 0.8}}
                className="fixed left-0 w-full md:hidden h-[85vh] bg-white shadow-lg z-40 
                    py-4 px-6 flex flex-col justify-between"
              >
                <nav className="text-greyscale_title font-medium flex flex-col gap-4">
                  <Link
                    className={`${navClass}`}
                    onClick={() => menuOpen(false)}
                    href="/events"
                  >
                    Events
                  </Link>
    {/*
                  <Link
                    className={`${navClass}`}
                    onClick={() => menuOpen(false)}
                    href="/"
                  >
                    Partners & Sponsors
                  </Link>*/}
                  <Link
                    className={`${navClass}`}
                    onClick={() => menuOpen(false)}
                    href="/about"
                  >
                    About Us
                  </Link>
                  <Link
                    className={`${navClass}`}
                    onClick={() => menuOpen(false)}
                    href="/contact"
                  >
                    Contact Us
                  </Link>
                </nav>
              </motion.div>
            )}
    
            {children}
            <Footer />
          </body>
        </html>
      );
}

export default Layout