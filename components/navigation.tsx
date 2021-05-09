import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from 'next/link';
import { NavigateItem } from './model/navigation';
import { useRouter } from 'next/router';

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
  const router = useRouter().route.replace('/', '');
  return (
    <div className="flex items-center cursor-pointer py-5 px-3">
      {navigation.map(({ path, title }) => {
        const cssLink = router === path ? 'rounded-xl  bg-yellow-300' : 'text-gray-800';
        console.log(router, path);
        return (
          <Link href={`/${path}`} key={path}>
            <a className={`flex items-center cursor-pointer my-5 px-3  ${cssLink}`}> {title}</a>
          </Link>
        );
      })}
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
