import { useContext, useState, useEffect } from "react";
import { Avatar, MenuProps, Dropdown } from "antd";
import Image from "next/image";
import { useRouter } from "next/router"
import Link from "next/link";
import Logo from "../assets/4373234_hackerrank_logo_logos_icon.svg";
import { AuthContext } from "../context/authProvider";

export default function Navbar() {
  const authContext = useContext(AuthContext);
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)


  useEffect(() => {
    if (authContext?.auth.user?.Email) setIsLoggedIn(true)
  }, [])
  

  const items: MenuProps["items"] = [
    {
      key: 1,
      label: (
        <div className="py-2 text-sm text-left text-gray-900 dark:text-white">
          <div>{authContext?.auth.user?.UserName}</div>
          <div className="font-medium truncate">
            {authContext?.auth.user?.Email}
          </div>
        </div>
      ),
    },
    {
      type: "divider",
    },
    {
      key: 2,
      label: <Link href="/profile">Profile</Link>,
    },
    {
      key: 3,
      label: <Link href="/setting">Setting</Link>,
    },
    {
      type: "divider",
    },
    {
      key: 4,
      label: "Sign out",
      onClick: () => authContext?.logout(),
    },
  ];

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow mb-2 px-4">
      <div className="flex flex-wrap items-center justify-between w-full">
        <a href="https://flowbite.com/" className="flex items-center">
          <Image src={Logo} className="w-14 h-12 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>
        <div className="flex justify-center items-center md:order-2">
          {isLoggedIn ? (
            <Dropdown menu={{ items }}>
              <Avatar className="text-[#f56a00] bg-[#fde3cf] mx-2">U</Avatar>
            </Dropdown>
          ) : (
            <button
              onClick={() => router.push('/login')}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
          )}

          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul className="flex flex-col p-4 border m-0 border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                href="/"
                
                className={`block text-gray-700 rounded hover:text-blue-700 active:text-blue-700 ${router.asPath === '/' ? "text-blue-700" : ""}`}
                aria-current="page"
              >
                Home
              </Link>
            </li>
            {authContext?.auth.user?.Email && (<li>
              <Link
                href="/dashboard"
                className={`block text-gray-700 rounded hover:text-blue-700 active:text-blue-700 ${router.asPath === '/dashboard' ? "text-blue-700" : ""}`}
                aria-current="page"
              >
                Dashboard
              </Link>
            </li>)}
            <li>
              <Link
                href="/problems"
                className={`block text-gray-700 rounded hover:text-blue-700 active:text-blue-700 ${router.asPath === '/problems' ? "text-blue-700" : ""}`}
                aria-current="page"
              >
                Problems
              </Link>
            </li>
            <li>
              <Link
                href="contest"
                className={`block text-gray-700 rounded hover:text-blue-700 active:text-blue-700 ${router.asPath === '/contest' ? "text-blue-700" : ""}`}
              >
                Contest
              </Link>
            </li>
            <li>
              <Link
                href="disscuss"
                className={`block text-gray-700 rounded hover:text-blue-700 active:text-blue-700 ${router.asPath === '/disscuss' ? "text-blue-700" : ""}`}
              >
                Disscuss
              </Link>
            </li>
            <li>
              <Link
                href="blog"
                className={`block text-gray-700 rounded hover:text-blue-700 active:text-blue-700 p-0 ${router.asPath === '/blog' ? "text-blue-700" : ""}`}
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
