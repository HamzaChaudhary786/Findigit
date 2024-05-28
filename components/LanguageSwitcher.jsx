import { Globe } from 'lucide-react';
import { useRouter } from 'next/router';

export default function LanguageSwitcher() {
  const router = useRouter();

  // Get the current path without the locale prefix
  const currentPath = router.asPath.replace(`/${router.locale}`, '');

  const switchLanguage = () => {
    const newLocale = router.locale === 'en' ? 'ar' : 'en';
    router.replace(currentPath, currentPath, { locale: newLocale });
  };

  return (
    <div>
      <div
        className="flex items-center cursor-pointer"
        onClick={switchLanguage}
      >
        {router.locale === 'en' ? 'عربى' : 'English'}{' '}
        <Globe size={20} className="mx-1" />
      </div>
    </div>
  );
}
