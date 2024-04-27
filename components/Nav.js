// icons
import {
  BsFillSquareFill,
  BsFill1SquareFill,
  BsFill2SquareFill,
  BsFill3SquareFill,
  BsFill4SquareFill,
  BsFill5SquareFill,
  BsFill6SquareFill,
  BsGithub,
  BsStarFill,
  BsPersonCircle,
} from 'react-icons/bs';

// nav data
export const navData = [
  { name: 'home', path: '/', icon: <BsStarFill /> },
  { name: 'integrantes', path: '/2', icon: <BsPersonCircle /> },
  // { name: 'primer semestre', path: '/3', icon: <BsFill1SquareFill /> },
  // { name: 'segundo semestre', path: '/4', icon: <BsFill2SquareFill /> },
  // { name: 'tercer semestre', path: '/5', icon: <BsFill3SquareFill /> },
  // { name: 'cuarto semestre', path: '/6', icon: <BsFill4SquareFill /> },
  {
    name: 'sexto semestre',
    path: '/7',
    icon: <BsFillSquareFill />,
  },
  {
    name: 'documentation',
    path: '/8',
    icon: <BsGithub />,
  },
];

// next link
import Link from 'next/link';

// next router
import { useRouter } from 'next/router';

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className="flex flex-col items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      {/* inner */}
      <div className="flex w-full xl:flex-col items-center justify-between xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[80px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${
                link.path === pathname && 'text-yellow-300'
              } relative flex items-center group hover:text-yellow-300 transition-all duration-300`}
              href={link.path}
              key={index}
            >
              {/* tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="relative flex text-yellow-300 items-center p-[6px]">
                  <div className="text-[12px] font-semibold capitalize">
                    {link.name}
                  </div>
                </div>
              </div>
              {/* icons */}
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
