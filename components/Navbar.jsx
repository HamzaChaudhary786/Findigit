'use client';

import { useState, useEffect } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';
import logo from '@/public/logo.webp';
import Image from 'next/image';

import LanguageSwitcher from '@/components/LanguageSwitcher';
const Navbar = () => {
  const { t } = useTranslation('navbar');
  const [navbar, setNavbar] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const getLocalizedPath = (path) => {
    const { locale } = router;
    if (locale === router.defaultLocale) {
      return `/${path}`;
    }
    return `/${locale}/${path}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setNavbar(!navbar);
  };
  return (
    <nav
      className={`z-50 w-full shadow fixed top-0 ${
        isScrolled ? 'bg-white' : 'bg-transparent'
      }
      ${navbar ? 'bg-white' : 'bg-transparent'}
      `}
    >
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <a href={getLocalizedPath('')}>
              <span className="sr-only">Home</span>
              <Image className="w-28 h-auto" src={logo} alt="site logo" />
            </a>

            <div
              className={`md:hidden flex items-center ${
                navbar || isScrolled ? 'text-black' : 'text-white'
              }
             
              `}
            >
              <LanguageSwitcher />
              <button
                className={`p-2 rounded-md outline-none 
                                  `}
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? 'block' : 'hidden'
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
              <li
                className={`${
                  navbar || isScrolled
                    ? 'text-black'
                    : 'text-white drop-shadow-xl shadow-white'
                } transition font-medium hover:underline hover:text-yellow-400 ml-6`}
              >
                <a href={getLocalizedPath('')}>{t('home')}</a>
              </li>
              <li
                className={`${
                  navbar || isScrolled
                    ? 'text-black'
                    : 'text-white drop-shadow-xl shadow-white'
                } transition  font-medium hover:underline hover:text-yellow-400`}
              >
                <a href={getLocalizedPath('#services')}>{t('services')}</a>
              </li>
              {/* <li
                className={`${
                  navbar || isScrolled
                    ? 'text-black'
                    : 'text-white drop-shadow-xl shadow-white'
                } transition font-medium hover:underline hover:text-yellow-400`}
              >
                <a href={getLocalizedPath('#testimonials')}>
                  {t('testimonials')}
                </a>
              </li> */}
              <li
                className={`${
                  navbar || isScrolled
                    ? 'text-black'
                    : 'text-white drop-shadow-xl shadow-white'
                } transition  font-medium hover:underline hover:text-yellow-400`}
              >
                <a href={getLocalizedPath('about')}>{t('about')}</a>
              </li>
            </ul>
          </div>
        </div>

        <div
          className={`sm:flex sm:gap-4 hidden items-center justify-center ${
            isScrolled ? 'text-black' : 'text-white'
          }`}
        >
          <LanguageSwitcher />
          <a
            className="rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-5 py-2.5 text-sm font-medium  shadow text-white"
            href={getLocalizedPath('contact')}
          >
            {t('contact')}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
