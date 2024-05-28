'use client';
import { useEffect, useRef, useState } from 'react';
import useTranslation from 'next-translate/useTranslation';
import { sendContactForm } from '@/lib/api';

const initValues = {
  name: '',
  number: '',
  email: '',
  services: '',
};

const initState = {
  values: initValues,
};

const ContactHero = () => {
  const videoRef = useRef(null);
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const { values, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));

  const handleChange = ({ target }) =>
    setState((prevState) => ({
      ...prevState,
      values: {
        ...prevState.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async (e) => {
    e.preventDefault();

    setState((prev) => ({
      ...prev,
    }));

    alert('Form submitted successfully!');
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
    } catch (error) {
      setState((prev) => ({
        ...prev,
      }));
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error('Auto-play was prevented:', error);
      });
    }
  }, []);
  const { t } = useTranslation('contactHero');

  return (
    <section
      className="relative w-full h-screen overflow-hidden z-[1] "
      id="home"
    >
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
      <div className="absolute inset-0 items-center  flex justify-evenly flex-wrap mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="w-full sm:max-w-xl mx-auto text-center">
          <h1 className="text-3xl font-medium sm:text-5xl text-white mb-6 drop-shadow-xl shadow-black">
            <span className="text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 leading-loose font-bold drop-shadow-xl shadow-black">
              {t('contactHero.sectionTitle1')}
              <br />
            </span>
            <span>{t('contactHero.sectionTitle2')}</span>
          </h1>
        </div>

        <div className="w-full sm:max-w-xl mx-auto px-4 py-8 sm:px-6 lg:px-8 bg-white rounded-lg">
          <div className="mx-auto max-w-lg">
            <h1
              className="text-2xl font-semibold
         sm:text-3xl"
            >
              {t('contactHero.formSubtitle')}
            </h1>
          </div>

          {error && (
            <div className="mx-auto max-w-lg">
              <p className="mt-4 text-red-500">{error}</p>
            </div>
          )}

          {state.success && (
            <div className="mx-auto max-w-lg">
              <p className="mt-4 text-green-500">
                Form submitted successfully!
              </p>
            </div>
          )}

          <form className="mx-auto space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">
                Name
              </label>

              <div className="relative">
                <input
                  type="text"
                  className={`w-full rounded-lg p-4 pe-12 text-sm shadow-sm border border-[#00103A] ${
                    touched.name && !values.name ? 'border-red-500' : ''
                  }`}
                  placeholder={t('contactHero.placeholders.name')}
                  value={values.name}
                  name="name"
                  onChange={handleChange}
                  onBlur={onBlur}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="number" className="sr-only">
                Number
              </label>

              <div className="relative">
                <input
                  type="tel"
                  className={`w-full rounded-lg p-4 pe-12 text-sm shadow-sm border border-[#00103A] ${
                    touched.number && !values.number ? 'border-red-500' : ''
                  }`}
                  placeholder={t('contactHero.placeholders.number')}
                  value={values.number}
                  name="number"
                  onChange={handleChange}
                  onBlur={onBlur}
                  required
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className={`w-full rounded-lg border border-[#00103A] p-4 pe-12 text-sm shadow-sm"  ${
                    touched.email && !values.email ? 'border-red-500' : ''
                  }`}
                  placeholder={t('contactHero.placeholders.email')}
                  value={values.email}
                  name="email"
                  onChange={handleChange}
                  required
                  onBlur={onBlur}
                />
              </div>
            </div>

            <div>
              <label htmlFor="services" className="sr-only">
                {t('contactHero.servicesLabel')}
              </label>

              <select
                name="services"
                id="services"
                className={`mt-1.5 text-gray-700 sm:text-sm w-full rounded-lg border border-[#00103A] p-4 pe-12 text-sm shadow-sm bg-white"  ${
                  touched.services && !values.services ? 'border-red-500' : ''
                }`}
                onChange={handleChange}
                value={values.services}
                required
                onBlur={onBlur}
              >
                <option disabled value="">
                  {t('contactHero.servicesOptions.default')}
                </option>
                <option value="AI & Machine Learning">
                  {t('contactHero.servicesOptions.ai_ml')}
                </option>
                <option value="Branding">
                  {t('contactHero.servicesOptions.branding')}
                </option>
                <option value="Logo Designing">
                  {t('contactHero.servicesOptions.logo_designing')}
                </option>
                <option value="Web Development">
                  {t('contactHero.servicesOptions.web_development')}
                </option>
                <option value="Mobile App Development">
                  {t('contactHero.servicesOptions.mobile_app_development')}
                </option>
                <option value="Social Media Marketing">
                  {t('contactHero.servicesOptions.social_media_marketing')}
                </option>
                <option value="Media Planning">
                  {t('contactHero.servicesOptions.media_planning')}
                </option>
                <option value="Email Marketing">
                  {t('contactHero.servicesOptions.email_marketing')}
                </option>
                <option value="Google Ads">
                  {t('contactHero.servicesOptions.google_ads')}
                </option>
              </select>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-10 py-2.5 text-sm font-medium text-white shadow disabled:opacity-75 disabled:cursor-not-allowed"
                disabled={
                  !values.name ||
                  !values.number ||
                  !values.email ||
                  !values.services
                }
                onClick={onSubmit}
              >
                {t('contactHero.submitButton')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
