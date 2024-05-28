'use client';
import { useEffect, useRef } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { useRouter } from 'next/router';

const Hero = () => {
  const videoRef = useRef(null);
  const router = useRouter();
  const getLocalizedPath = (path) => {
    const { locale } = router;
    if (locale === router.defaultLocale) {
      return `/${path}`;
    }
    return `/${locale}/${path}`;
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Auto-play was prevented:', error);
      });
    }
  }, []);
  const { t } = useTranslation('hero');
  return (
    <section className="relative w-full h-screen overflow-hidden z-1" id="home">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        className="absolute inset-0 object-cover w-full h-full"
      >
        <source src="/video.mp4" type="video/mp4" />
        {/* Add more source elements for different video formats if needed */}
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="mx-auto max-w-screen-xl px-4 py-32 text-center">
          <h1 className="text-3xl font-medium sm:text-5xl text-white animate__animated animate__backInDown drop-shadow-xl shadow-black">
            {t('hero.title.where')}{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 leading-loose drop-shadow-xl shadow-black">
              {t('hero.title.ideas')}
            </span>{' '}
            {t('hero.title.transformInto')}
            <strong className="font-medium text-white sm:block">
              {t('hero.title.digital')}{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 drop-shadow-xl shadow-black">
                {t('hero.title.experiences')}
              </span>
            </strong>
          </h1>

          <div className="mt-8 flex flex-wrap justify-center gap-4 animate__animated animate__backInUp">
            <a
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-lg block px-12 py-3 text-sm font-medium text-white shadow focus:outline-none focus:ring w-auto"
              href={getLocalizedPath('contact')}
            >
              {t('hero.button.text')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
