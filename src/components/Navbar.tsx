"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import Image from "next/image";

const Nav = () => {
  return (
    <Navbar
      className="px-[5%] z-10 py-2 bg-white border-b shadow-sm"
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
        <NavbarItem>
          <Button
            className="font-medium border border-[#183453]/50 tracking-wide rounded-full py-3 px6 bg-white text-[#183453]"
            size="lg"
          >
            Contact
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Nav;
