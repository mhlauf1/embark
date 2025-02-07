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
        className="px-2 sm:px-6 md:px-20 z-20 py-2 bg-white border-b shadow-sm"
        maxWidth="full"
      >
        <NavbarBrand>
          <Link href="/">
            <Image src="/nav-logo.png" alt="logo" height={60} width={150} />
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
            <button className="font-medium border border-[#183453]/50 tracking-wide rounded-full py-3 px-6 bg-white text-[#183453]">
              Contact
            </button>
          </NavbarItem>
          <button
            className="sm:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <IoMdClose size={24} /> : <IoMenuOutline size={24} />}
          </button>
        </NavbarContent>
      </Navbar>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-20 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex flex-col items-center mt-[10vh] bg-neutral-50 h-auto mx-8 py-12 rounded-md  text-neutral-900 text-lg space-y-6">
          <Link
            className="hover:text-neutral-500 transition"
            onChange={toggleMenu}
            href="/"
          >
            Home
          </Link>

          <Link
            className="hover:text-neutral-500 transition"
            onChange={toggleMenu}
            href="/about"
          >
            About
          </Link>

          <Link
            className="hover:text-neutral-500 transition"
            onChange={toggleMenu}
            href="/services"
          >
            Services
          </Link>

          <Link
            className="hover:text-neutral-500 transition"
            onChange={toggleMenu}
            href="/network"
          >
            Network
          </Link>

          <Link
            className="hover:text-neutral-500 transition"
            onChange={toggleMenu}
            href="/partner-with-us"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
