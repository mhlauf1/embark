"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import Image from "next/image";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Navbar
        className="px-2 sm:px-6 md:px-20 z-[999] py-2 bg-white border-b shadow-sm"
        maxWidth="full"
      >
        <NavbarBrand>
          <Link href="/">
            <Image src="/nav-logo.png" alt="logo" height={60} width={130} />
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-6 ml-2" justify="center">
          <NavbarItem>
            <Link color="foreground" href="/about">
              About
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/services">
              Services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/network">
              Network
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="/partner-with-us">
              Partner With Us
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden sm:flex">
            <a
              className="cursor-pointer group"
              href="mailto:admin@embarkpetservices.com?subject=Inquiry from Website"
            >
              <button
                className="font-medium border border-[#183453]/50 tracking-wide rounded-full py-3 px-6 
        bg-white text-[#183453] transition-all duration-300 ease-out
        hover:bg-neutral-50 hover:border-[#183453]/20
        active:scale-95 active:shadow-md"
              >
                Contact
              </button>
            </a>
          </NavbarItem>
          <button
            className="sm:hidden text-[#183453] transition-transform duration-200 
      hover:scale-110 active:scale-90"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <IoMdClose size={32} /> : <IoMenuOutline size={32} />}
          </button>
        </NavbarContent>
      </Navbar>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-sm z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center gap-8 pt-32 px-8">
          <Link
            className="text-xl font-medium text-[#183453] hover:text-[#183453]/70 transition"
            href="/"
          >
            <button onChange={toggleMenu}>Home</button>
          </Link>
          <Link
            className="text-xl font-medium text-[#183453] hover:text-[#183453]/70 transition"
            href="/about"
          >
            <button onChange={toggleMenu}>About</button>
          </Link>
          <Link
            className="text-xl font-medium text-[#183453] hover:text-[#183453]/70 transition"
            href="/services"
          >
            <button onChange={toggleMenu}>Services</button>
          </Link>
          <Link
            className="text-xl font-medium text-[#183453] hover:text-[#183453]/70 transition"
            href="/network"
          >
            <button onChange={toggleMenu}>Network</button>
          </Link>
          <Link
            className="text-xl font-medium text-[#183453] hover:text-[#183453]/70 transition"
            href="/partner-with-us"
          >
            <button onChange={toggleMenu}>Partner With Us</button>
          </Link>
          <a
            className="cursor-pointer"
            href="mailto:admin@embarkpetservices.com?subject=Inquiry from Website"
          >
            <button className="font-medium border border-[#183453]/50 tracking-wide rounded-full py-3 px-6 bg-white text-[#183453] mt-4">
              Contact
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
