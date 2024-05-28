import { Mail, MailOpen, MessageCircle, PhoneCall } from 'lucide-react';
import useTranslation from 'next-translate/useTranslation';
import Image from 'next/image';

const ContactUs = ({ lng }) => {
  const { t } = useTranslation('contactUs');
  return (
    <section className="bg-white text-black" id="services">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">
            {t('contactUs.sectionTitle')}
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/20 text-center flex flex-col justify-center items-center">
            <Image
              src={'/whatsapp.png'}
              width={40}
              height={40}
              alt="whatsapp"
            />
            <h2 className="mt-2 text-xl font-semibold text-black">
              {t('contactUs.message.title')}
            </h2>
            <p className="mt-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold">
              {t('contactUs.message.contactInfo')}
            </p>
          </div>
          <div className="rounded-xl p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/20 text-center flex flex-col justify-center items-center">
            <Image src={'/email.png'} width={40} height={40} alt="email" />
            <h2 className="mt-2 text-xl font-semibold text-black">
              {t('contactUs.email.title')}
            </h2>
            <p className="mt-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold">
              {t('contactUs.email.contactInfo')}
            </p>
          </div>
          <div className="rounded-xl p-8 shadow-xl transition hover:border-blue-500/10 hover:shadow-blue-500/20 text-center flex flex-col justify-center items-center">
            <Image src={'/phone.png'} width={40} height={40} alt="phone" />
            <h2 className="mt-2 text-xl font-semibold text-black">
              {t('contactUs.call.title')}
            </h2>
            <p className="mt-2 bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold">
              {t('contactUs.call.contactInfo')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
