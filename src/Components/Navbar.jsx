'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'Add-Product', href: '/dashboard/add-product' },
  ]

  return (
    <nav className="bg-base-100 shadow-md px-4 sticky top-0 z-50">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold btn btn-ghost">
          NextShop
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`px-3 py-2 rounded-md ${
                  pathname === link.href ? 'bg-primary text-white' : 'hover:bg-gray-200'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/signin" className="px-3 py-2 rounded-md hover:bg-gray-200">
              Login
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden btn btn-ghost"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-out ${
          open ? 'max-h-60 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
        }`}
      >
        <ul className="flex flex-col space-y-2 px-4  py-2 bg-base-100 shadow-md rounded-b-md">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block px-3 py-2 rounded-md ${
                  pathname === link.href ? 'bg-primary text-white' : 'hover:bg-gray-200'
                }`}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/signin"
              className="block px-3 py-2 rounded-md hover:bg-gray-200"
              onClick={() => setOpen(false)}
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
