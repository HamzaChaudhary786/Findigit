import useTranslation from 'next-translate/useTranslation';

const Stats = ({ lng }) => {
  const { t } = useTranslation('stats');
  return (
    <section className="bg-white" id="stats">
      <div className="flex justify-evenly flex-wrap mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div className="w-full sm:max-w-xl">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t('stats.whoWeAre.title')}
          </h2>

          <h3 className="mt-4 text-gray-600 sm:text-2xl leading-loose">
            {t('stats.whoWeAre.description.paragraph1')}
          </h3>

          <p className="mt-4 text-gray-500 sm:text-base leading-relaxed">
            {t('stats.whoWeAre.description.paragraph2')}
          </p>
        </div>

        <div className="mt-12 sm:mt-0 flex border border-black w-full sm:max-w-fit rounded-lg">
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-1 sm:divide-x sm:divide-gray-100 bg-[#EBF1FD] rounded-s-lg">
            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="mt-4 order-last text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                {t('stats.metrics.activePageviews.title')}
              </dt>

              <dd className="text-4xl font-semibold text-black md:text-5xl">
                {t('stats.metrics.activePageviews.value')}
              </dd>
            </div>

            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="mt-4 order-last text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                {t('stats.metrics.totalRevenue.title')}
              </dt>

              <dd className="text-4xl font-semibold text-black md:text-5xl">
                {t('stats.metrics.totalRevenue.value')}
              </dd>
            </div>
            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="mt-4 order-last text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                {t('stats.metrics.publishedOnGoogleAppleStore.title1')}
                <br />
                {t('stats.metrics.publishedOnGoogleAppleStore.title2')}
              </dt>

              <dd className="text-4xl font-semibold text-black md:text-5xl">
                {t('stats.metrics.publishedOnGoogleAppleStore.value')}
              </dd>
            </div>
          </dl>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-1 sm:divide-x sm:divide-gray-100">
            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="mt-4 order-last text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                {t('stats.metrics.teamMembers.title')}
              </dt>

              <dd className="text-4xl font-semibold text-black md:text-5xl">
                {t('stats.metrics.teamMembers.value')}
              </dd>
            </div>

            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="mt-4 order-last text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                {t('stats.metrics.projectsCompleted.title')}
              </dt>

              <dd className="text-4xl font-semibold text-black md:text-5xl">
                {t('stats.metrics.projectsCompleted.value')}
              </dd>
            </div>

            <div className="flex flex-col px-4 py-8 text-center">
              <dt className="mt-4 order-last text-lg font-medium bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
                {t('stats.metrics.countriesOfOperation.title')}
              </dt>

              <dd className="text-4xl font-semibold text-black md:text-5xl">
                {t('stats.metrics.countriesOfOperation.value')}
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Stats;
