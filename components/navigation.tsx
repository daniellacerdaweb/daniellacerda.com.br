import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from 'next/link';
import { NavigateItem } from './model/navigation';

type Props = {
  listaNavigate: NavigateItem[];
};

const Navigation = ({ listaNavigate }: Props) => {
  return (
    <header>
      <nav className="mx-auto">
        <div className="flex mx-20 justify-center items-center md:justify-between">
          {logo}
          {menu(listaNavigate)}
        </div>
      </nav>
    </header>
  );
};

const menu = (navigation: NavigateItem[]) => {
  return (
    <div className="flex items-center cursor-pointer py-5 px-3">
      {navigation.map(({ path, title }) => (
        <Link href={`/${path}`} key={path}>
          <a className="flex items-center cursor-pointer py-5 px-3"> {title}</a>
        </Link>
      ))}
    </div>
  );
};

const logo = (
  <div className="hidden sm:flex">
    <Link href="/">
      <a className="cursor-pointer">
        <LazyLoadImage src="/images/daniel-logo.svg" alt="profile" />
      </a>
    </Link>
  </div>
);

const skeletonMenu = (
  <div className="flex justify-center h-4 w-2/2 bg-gray-300 rounded animate-pulse mr-10	" />
);

export default Navigation;
