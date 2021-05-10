import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import ChevronDownIcon from "../icons/chavronDown";
import MenuIcon from "../icons/menu";
import Link from "next/link";

export default function DropdownMenu() {
  return (
    <Menu>
      <Menu.Button className="flex flex-row">
        <MenuIcon classes="w-8 h-8" />
      </Menu.Button>
      <Menu.Items className="fixed bottom-10 left-0 bg-white flex flex-col p-4">
        <Menu.Item>
          {({ active }) => (
            <Link href="/">
              {/* <a className={`${active && "bg-blue-500"}`}>Home</a> */}
              <a className={`my-2`}>Home</a>
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link href="/services">
              <a className={`my-2`}>Services</a>
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link href="/gallery">
              <a className={`my-2`}>Gallery</a>
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link href="/about">
              <a className={`my-2`}>About</a>
            </Link>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <Link href="/testimonals">
              <a className={`my-2`}>Testimonals</a>
            </Link>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}
