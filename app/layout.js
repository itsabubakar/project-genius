"use client";
import { useState } from "react";

import "./globals.css";
import Image from "next/image";
import Menu from "../public/svg/menu.svg";
import Button from "./ui/headerButton";
import Logo from "./ui/logo";
import Link from "next/link";

import { usePathname } from "next/navigation";
import Footer from "./footer";
import ButtonGlass from "./ui/buttonGlass";
import { useRouter } from "next/navigation";

export default function RootLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const navClass = "hover:text-primary transition duration-300 py-6";

  // Exclude RootLayout for dashboard routes
  if (pathname.startsWith("/dashboard")) {
    return (
      <html>
        <head>
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
        <body>{children}</body>
      </html>
    );
  }

  return (
    <html lang="en">
      <head>
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
          className="sticky top-0 h-[48px] sm:h-[80px] px-[16px] sm:px-[32px] md:px-[40px]
            font-outfit flex justify-between items-center bg-white z-50"
        >
          <Logo classname="text-xl sm:text-[28px] lg:text-2xl" />

          <div className="flex gap-[32px] items-center">
            <nav
              className="hidden md:flex text-greyscale_title py-[24px] gap-[32px]
                font-medium"
            >
              <Link className={`${navClass}`} href="/events">
                Events
              </Link>
              <Link className={`${navClass}`} href="/">
                Partners & Sponsors
              </Link>
              <Link className={`${navClass}`} href="/contact">
                Contact Us
              </Link>
              <Link className={`${navClass}`} href="/about">
                About Us
              </Link>
            </nav>

            <div className="flex gap-2">
              <Button href="/auth/create-profile" classname="hidden sm:block">
                Register
              </Button>
              <ButtonGlass
                onClick={() => router.push("/auth")}
                classname="hidden sm:block px-0 w-10"
              >
                Login
              </ButtonGlass>
            </div>

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
          <div
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

              <Link
                className={`${navClass}`}
                onClick={() => menuOpen(false)}
                href="/"
              >
                Partners & Sponsors
              </Link>
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
            <Button
              href={"/auth/create-profile"}
              classname="w-full mt-auto mb-4   border-primary_pressed border-2 px-[20px] py-[12px]
               rounded-full block text-center bg-white
              text-primary hover:border-primary_hover  "
            >
              Register
            </Button>
            <Button href={"/auth"} classname="w-full">
              Login
            </Button>
          </div>
        )}

        {children}
        <Footer />
      </body>
    </html>
  );
}
