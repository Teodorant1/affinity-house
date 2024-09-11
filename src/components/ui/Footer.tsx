import Image from 'next/image'
import { Twitter, Facebook } from 'lucide-react'
import React from 'react'

// Import or define icons at the top of the file
const icons = [
  { url: 'https://twitter.com', icon: Twitter },
  { url: 'https://facebook.com', icon: Facebook },
  // ... add more icons as needed
];

function Footer() {
  const links = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    // Add more links as needed
  ];

  return (
    <footer className="flex flex-col gap-y-5 rounded-lg px-7 py-5 md:px-10">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <Image
            className="h-5 w-5"
            src="https://magicui.design/icon.png"
            alt="Affinity House, Inc."
            width={20}
            height={20}
          />
          <h2 className="text-lg font-bold text-neutral-900 dark:text-white">
            Affinity House
          </h2>
        </div>

        <div className="flex gap-x-2">
          {icons.map((icon) => (
            <a
              key={icon.url}
              href={icon.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-5 w-5 items-center justify-center text-neutral-400 transition-all duration-100 ease-linear hover:text-neutral-900 hover:underline hover:underline-offset-4 dark:font-medium dark:text-neutral-500 hover:dark:text-neutral-100"
            >
              {React.createElement(icon.icon)}
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-between gap-y-5 md:flex-row md:items-center">
        <ul className="flex flex-col gap-x-5 gap-y-2 text-neutral-500 md:flex-row md:items-center ">
          {links.map((link, index) => (
            <li
              key={index}
              className="text-[15px]/normal font-medium text-neutral-400 transition-all duration-100 ease-linear hover:text-neutral-900 hover:underline hover:underline-offset-4 dark:font-medium dark:text-neutral-400 hover:dark:text-neutral-100"
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <div className="flex items-center justify-between text-sm font-medium tracking-tight text-neutral-500 dark:text-neutral-400">
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
