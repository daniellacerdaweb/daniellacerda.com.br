import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from 'next/link';

const Navigation = () => (
  <header>
    <nav className="fixed z-50 min-w-full bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center md:justify-between">
          <div className="hidden flex space-x-2 sm:flex justify-self-center">
            <Link href="/">
              <a className="flex items-center cursor-pointer py-5 px-3">
                <LazyLoadImage
                  src="/images/daniel-logo.svg"
                  alt="profile"
                  className="flex items-center h-10"
                  effect="blur"
                />
              </a>
            </Link>
          </div>
          <div className="flex items-center cursor-pointer py-5 px-3">
            <Link href="/About">
              <a className="flex items-center cursor-pointer py-5 px-3"> Sobre</a>
            </Link>
            <Link href="/Portfolio">
              <a className="flex items-center cursor-pointer py-5 px-3"> Portfólio</a>
            </Link>
            <Link href="/Stacks">
              <a className="flex items-center cursor-pointer py-5 px-3"> Stacks</a>
            </Link>
            <Link href="/Contact">
              <a className="flex items-center cursor-pointer py-5 px-3">Contato</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default Navigation;
