import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from 'next/link';
import { useGetNavigate } from '../hook/useNavigation';

const Navigation = () => {
  const { data, loading } = useGetNavigate();

  const logo = (
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
  );

  const loader = (
    <div className="flex justify-center h-4 w-2/2 bg-gray-300 rounded animate-pulse mr-10	"></div>
  );

  return (
    <header>
      <nav className="fixed z-50 min-w-full bg-white bg-opacity-50">
        <div className="mx-auto">
          <div className="flex justify-center items-center md:justify-between">
            {logo}
            {loading ? loader : renderMenu(data)}
          </div>
        </div>
      </nav>
    </header>
  );
};

function renderMenu(navigation) {
  const nav = navigation.map(({ path, title }) => (
    <Link href={path} key={path}>
      <a className="flex items-center cursor-pointer py-5 px-3"> {title}</a>
    </Link>
  ));

  return <div className="flex items-center cursor-pointer py-5 px-3">{nav}</div>;
}

export default Navigation;