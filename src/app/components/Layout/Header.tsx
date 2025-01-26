"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { name: "Women", link: "/" },
    { name: "Men", link: "/" },
    { name: "Accessories", link: "/" },
    { name: "Home", link: "/" },
    { name: "Gifts", link: "/" },
    { name: "Sale", link: "/" },
    { name: "About Us", link: "/" },
  ];

  const actionItems = [
    { icon: "/icons/search.svg", link: "/", type: "icon" },
    { icon: "/icons/heart.svg", link: "/", type: "icon" },
    { icon: "Login", link: "/", type: "text" },
    { icon: "Bag[2]", link: "/", type: "text" },
  ];

  return (
    <div className="h-[64px] flex items-center fixed bg-bgColor w-full z-[90]">
      <div className="container flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <div>
            <img
              src="/images/logo.png"
              alt="Gobi logo"
              className="max-h-[32px]"
            />
          </div>
        </Link>

        {/* Desktop Menu Items */}
        <div className="hidden lg:flex lg:items-center gap-[27px]">
          {menuItems.map((item, idx) => (
            <Link href={item.link} key={`header-item-${idx}`}>
              <span key={item.name} className={`group relative w-max`}>
                <p
                  className={`underline-on-hover min-w-max  ${
                    pathname === item.link ? "text-main" : "hover:text-main"
                  }`}
                >
                  {item.name}
                </p>
              </span>
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex lg:items-center gap-[27px]">
          {actionItems.map((e, idx) =>
            e.type == "icon" ? (
              <Link href={e.link} key={`${e.icon}-${idx}`}>
                <img
                  key={`${e.icon}-${idx}`}
                  src={e.icon}
                  alt="icon"
                  className="max-h-[24px]"
                />
              </Link>
            ) : (
              <Link href={e.link} key={`${e.icon}-${idx}`}>
                <span key={e.icon} className={`group relative w-max`}>
                  <p
                    className={`underline-on-hover min-w-max  ${
                      pathname === e.link ? "text-main" : "hover:text-main"
                    }`}
                  >
                    {e.icon}
                  </p>
                </span>
              </Link>
            )
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            className="text-gray-800 focus:outline-none"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Sidebar Menu */}
        <div
          className={`fixed top-0 left-0 h-full bg-white shadow-lg w-[100%] max-w-[400px] transform ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-50`}
        >
          <div className="p-4">
            {/* Logo */}
            <div className="flex justify-between items-center">
              <img
                src="/images/logo.png"
                alt="Ecotech logo"
                className="max-h-[50px]"
              />
              {/* Close Button */}
              <button
                className="text-gray-800"
                onClick={toggleMobileMenu}
                aria-label="Close Menu"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Menu Items */}
            <nav className="mt-8">
              {menuItems.map((item, idx) => (
                <Link
                  onClick={toggleMobileMenu}
                  href={item.link}
                  key={`${item.name}-${idx}`}
                >
                  <p className="mb-4">
                    <span
                      className={`text-xl font-semibold cursor-pointer transition-colors ${
                        pathname === item.link ? "text-main" : "hover:text-main"
                      }`}
                    >
                      {item.name}
                    </span>
                  </p>
                </Link>
              ))}

              <Link onClick={toggleMobileMenu} href={"/contact-us"}>
                <button
                  type="button"
                  className="text-black mt-10 hover:bg-white uppercase hover:text-black border-[1px] border-gray-300 focus:ring-4 focus:ring-black font-bold rounded-lg text-md px-5 py-2.5 me-2 mb-2 focus:outline-none"
                >
                  Бидэнтэй холбогдох
                </button>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
