'use client';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';
import useTranslation from 'next-translate/useTranslation';

const AboutHero = ({ lng }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Auto-play was prevented:', error);
      });
    }
  }, []);
  const { t } = useTranslation('aboutHero');
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
      <div className="absolute inset-0 flex items-center justify-center mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-3xl font-medium sm:text-5xl text-white drop-shadow-xl shadow-black">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 leading-loose font-bold drop-shadow-xl shadow-black">
              {t('title.about')}
            </span>{' '}
            <span className="underline">FinDigit</span>
          </h1>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block text-sm font-medium shadow  focus:outline-none focus:ring w-auto bg-white px-2 py-2 rounded-full "
              href="#stats"
            >
              <ChevronDown className="text-blue-500" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
