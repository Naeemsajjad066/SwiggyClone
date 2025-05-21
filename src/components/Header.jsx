import React from 'react'
import { FaCaretDown } from "react-icons/fa6";
import { useState } from 'react';
function Header() {
    const [toggle, setToggle] = useState(false);
    const [cartItems, setcartItems] = useState(0);
    const showSideMenu = () => {
      setToggle(true);
    };
    const hideSideBar = () => {
      setToggle(false);
    };
  
    const links = [
      { name: "Search", icon: "magnifying-glass" },
      { name: "Offer", icon: "envelope-open", sup: "new" },
      { name: "Help", icon: "helmet-un" },
      { name: "SignIn", icon: "user-tie" },
      { name: "Cart", icon: "cart-plus", sup: cartItems },
    ];
  
    return (
      <>
        <div
          className="p-2 bg-white shadow back-overlay w-full h-full fixed duration-500 z-10"
          onClick={hideSideBar}
          style={{
            opacity: toggle ? 1 : 0,
            visibility: toggle ? "visible" : "hidden",
          }}
        >
          {/* side bar here */}
          <div
            className="w-[400px] rounded-xl bg-white h-full absolute duration-[400ms] z-30"
            onClick={(e) => {
              e.stopPropagation();
            }}
            style={{
              left: toggle ? "0%" : "-100%",
            }}
          >
            {/* Sidebar items dropdown example */}
            <div 
              className="absolute left-0 top-0 w-full bg-white shadow-lg z-20 transition-all duration-[400ms]"
              style={{
                transform: toggle ? "translateY(0)" : "translateY(-100%)",
                opacity: toggle ? 1 : 0
              }}
            >
              {/* Place sidebar dropdown items here */}
              <ul className="p-4">
                <li className="py-2 border-b">Sidebar Item 1</li>
                <li className="py-2 border-b">Sidebar Item 2</li>
                <li className="py-2">Sidebar Item 3</li>
              </ul>
            </div>
          </div>
        </div>
        <header className="p-2 bg-white shadow sticky top-0 z-[9999]">
          <nav className="max-w-[1200px]  mx-auto flex items-center justify-between ">
            <div className="flex items-center ">
              <a className="flex items-center gap-6 p-2" href="">
                <img className="w-9 h-9" src="/images/image.png" alt="" />
                <p>
                  <span className="font-bold  text-xl">Ratanda </span> JodhPur,
                  Rajistan,India{" "}
                </p>
              </a>
              <FaCaretDown
                className="text-red-500 cursor-pointer"
                onClick={showSideMenu}
              />
            </div>
  
            <div className="hidden md:flex gap-7">
              {links.map((link, index) => {
                return (
                  <a
                    key={index}
                    href=""
                    className="flex items-center hover:text-red-400 gap-2 font-sans transition duration-400 group"
                  >
                    <i className={`fa-solid fa-${link.icon}`}></i>
                    <p className="font-semibold">{link.name}</p>
                    <sup className="text-red-500 group-hover:text-black group-hover:font-semibold group-hover:transition group-hover:duration-500">
                      {link.sup}
                    </sup>
                  </a>
                );
              })}
            </div>
          </nav>
        </header>
      </>
    );
}

export default Header
