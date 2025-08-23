// src/Components/Footer.jsx
"use client";
import { useState } from "react";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const [modal, setModal] = useState(null);

  return (
    <>
      <footer className="bg-gray-900 text-gray-300 pt-8 pb-4 mt-10">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Left side */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-2xl font-bold text-white">NextShop</h2>
            <div className="flex space-x-4 mt-3 text-xl">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaFacebook />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-100 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Right side */}
          <div className="flex space-x-6 mt-6 md:mt-0">
            <button
              className="link link-hover hover:text-white"
              onClick={() => setModal("about")}
            >
              About
            </button>
            <button
              className="link link-hover hover:text-white"
              onClick={() => setModal("privacy")}
            >
              Privacy Policy
            </button>
            <button
              className="link link-hover hover:text-white"
              onClick={() => setModal("contact")}
            >
              Contact
            </button>
          </div>
        </div>

        {/* Copyright line */}
        <div className="mt-6 text-center text-sm text-gray-400 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} NextShop. All rights reserved.
        </div>
      </footer>

      {/* DaisyUI Modals */}
      {modal === "about" && (
        <dialog open className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">About NextShop</h3>
            <p className="py-4">
              NextShop is a modern e-commerce platform where you can shop online
              easily and securely.
            </p>
            <div className="modal-action">
              <button className="btn" onClick={() => setModal(null)}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}

      {modal === "privacy" && (
        <dialog open className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Privacy Policy</h3>
            <p className="py-4">
              We value your privacy. Your personal information will remain safe
              and will never be shared with third parties.
            </p>
            <div className="modal-action">
              <button className="btn" onClick={() => setModal(null)}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}

      {modal === "contact" && (
        <dialog open className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <p className="py-4">
              Email: support@nextshop.com <br />
              Phone: +1 (234) 567-890
            </p>
            <div className="modal-action">
              <button className="btn" onClick={() => setModal(null)}>
                Close
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}
