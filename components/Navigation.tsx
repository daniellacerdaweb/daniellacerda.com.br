import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-scroll';

const Navigation = () => (
  <header>
    <nav className="fixed min-w-full bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center md:justify-between">

          <div className="hidden flex  space-x-2 sm:flex justify-self-center">
            <LazyLoadImage
              src="/images/daniel-logo.svg"
              alt="profile"
              className="h-10"
              effect="blur"

            />
          </div>
          <div className="flex">
            <Link
              activeClass="active "
              to="about"
              spy
              smooth
              offset={-70}
              duration={500}
              className="cursor-pointer py-5 px-3"
            >
              Sobre
            </Link>
            <Link
              activeClass="active "
              to="portfolio"
              spy
              smooth
              offset={-70}
              duration={500}
              className="cursor-pointer py-5 px-3"
            >
              Portfólio
            </Link>
            <Link
              activeClass="active"
              to="stacks"
              spy
              smooth
              offset={-70}
              duration={500}
              className="cursor-pointer py-5 px-3"
            >
              Stacks
            </Link>
            <Link
              activeClass="active "
              to="contact"
              spy
              smooth
              offset={-70}
              duration={500}
              className="cursor-pointer py-5 px-3"
            >
              Contato
            </Link>

          </div>
        </div>

      </div>
    </nav>
  </header>
);

export default Navigation;
