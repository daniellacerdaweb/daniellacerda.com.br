import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavigateItem } from './model/navigation';
import { useGetLocale, useSetLocale } from '../hook/useLocale';
import { Locale } from '../model';

type Props = {
  listaNavigate: NavigateItem[];
};

const Navigation = ({ listaNavigate }: Props) => (
  <header>
    <nav>
      <div className="flex items-center md:justify-between">
        {logo}
        {menu(listaNavigate)}
      </div>
    </nav>
  </header>
);

const menu = (navigation: NavigateItem[]) => {
  const locale = useGetLocale();
  // const cssPTBR = Locale.ptBr === locale && 'localeAtivo';
  // const cssEnUS = Locale.enUS === locale && 'localeAtivo';
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
      {/* <a
        className={`flex items-center cursor-pointer my-5 px-3 ${cssPTBR}`}
        onClick={() => useSetLocale(Locale.ptBr)}>
        PT
      </a>

      <a
        className={`flex items-center cursor-pointer my-5 px-3 ${cssEnUS}`}
        onClick={() => useSetLocale(Locale.enUS)}>
        EN
      </a> */}
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
