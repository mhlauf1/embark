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
      className="px-[5%] py-2 bg-white border-b shadow-sm"
      maxWidth="full"
    >
      <NavbarBrand>
        <Image src="/nav-logo.png" alt="logo" height={67} width={180} />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-6 ml-2" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Services
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Network
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
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
