import Image from 'next/image';

const LogoCarousel = () => {
  return (
    <div
      x-data="{}"
      x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
      class={`w-full inline-flex flex-nowrap overflow-hidden py-8  justify-center bg-black`}
    >
      <ul
        x-ref="logos"
        class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        <li>
          <Image
            src="/logos/azgard.png"
            alt="azgard"
            width="100"
            height="100"
          />
        </li>
        <li>
          <Image
            src="/logos/bright.png"
            alt="bright"
            width="100"
            height="100"
          />
        </li>
        <li>
          <Image
            src="/logos/cawgenic.png"
            alt="cawgenic"
            width="100"
            height="100"
          />
        </li>
        <li>
          <Image
            src="/logos/coldstone.png"
            alt="coldstone"
            width="100"
            height="100"
          />
        </li>
        <li>
          <Image
            src="/logos/cracking.png"
            alt="cracking"
            width="50"
            height="50"
          />
        </li>
        <li>
          <Image
            src="/logos/dynasty.png"
            alt="dynasty"
            width="100"
            height="100"
          />
        </li>
        <li>
          <Image
            src="/logos/good market.png"
            alt="good market"
            width="100"
            height="100"
          />
        </li>
        <li>
          <Image
            src="/logos/ifanity.png"
            alt="ifanity"
            width="50"
            height="50"
          />
        </li>
        <li>
          <Image src="/logos/ivy.png" alt="ivy" width="100" height="100" />
        </li>
        <li>
          <Image src="/logos/mask.png" alt="mask" width="50" height="50" />
        </li>
        <li>
          <Image src="/logos/mrc.png" alt="mrc" width="100" height="100" />
        </li>
        <li>
          <Image src="/logos/nishat.png" alt="nishat" width="50" height="50" />
        </li>

        <li>
          <Image
            src="/logos/prgmea.png"
            alt="prgmea"
            width="100"
            height="100"
          />
        </li>

        <li>
          <Image src="/logos/rajby.png" alt="rajby" width="50" height="50" />
        </li>

        <li>
          <Image
            src="/logos/sprite.png"
            alt="sprite"
            width="100"
            height="100"
          />
        </li>

        <li>
          <Image
            src="/logos/stylers.png"
            alt="stylers"
            width="100"
            height="100"
          />
        </li>

        <li>
          <Image src="/logos/victor.png" alt="victor" width="50" height="50" />
        </li>
        <li>
          <Image src="/logos/z.png" alt="z" width="50" height="50" />
        </li>
      </ul>

      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        <li>
          <Image
            src="/logos/azgard.png"
            alt="azgard"
            width="100"
            height="100"
          />
        </li>
        <li>
          <Image
            src="/logos/bright.png"
            alt="bright"
            width="100"
            height="100"
          />
        </li>
        <li>
          <Image
            src="/logos/cawgenic.png"
            alt="cawgenic"
            width="100"
            height="100"
          />
        </li>
        <li>
          <Image
            src="/logos/coldstone.png"
            alt="coldstone"
            width="100"
            height="100"
          />
        </li>
        <li>
          <Image
            src="/logos/cracking.png"
            alt="cracking"
            width="50"
            height="50"
          />
        </li>
        <li>
          <Image
            src="/logos/dynasty.png"
            alt="dynasty"
            width="100"
            height="100"
          />
        </li>
        <li>
          <Image
            src="/logos/good market.png"
            alt="good market"
            width="100"
            height="100"
          />
        </li>
        <li>
          <Image
            src="/logos/ifanity.png"
            alt="ifanity"
            width="50"
            height="50"
          />
        </li>
        <li>
          <Image src="/logos/ivy.png" alt="ivy" width="100" height="100" />
        </li>
        <li>
          <Image src="/logos/mask.png" alt="mask" width="50" height="50" />
        </li>
        <li>
          <Image src="/logos/mrc.png" alt="mrc" width="100" height="100" />
        </li>
        <li>
          <Image src="/logos/nishat.png" alt="nishat" width="50" height="50" />
        </li>

        <li>
          <Image
            src="/logos/prgmea.png"
            alt="prgmea"
            width="100"
            height="100"
          />
        </li>

        <li>
          <Image src="/logos/rajby.png" alt="rajby" width="50" height="50" />
        </li>

        <li>
          <Image
            src="/logos/sprite.png"
            alt="sprite"
            width="100"
            height="100"
          />
        </li>

        <li>
          <Image
            src="/logos/stylers.png"
            alt="stylers"
            width="100"
            height="100"
          />
        </li>

        <li>
          <Image src="/logos/victor.png" alt="victor" width="50" height="50" />
        </li>
        <li>
          <Image src="/logos/z.png" alt="z" width="50" height="50" />
        </li>
      </ul>
    </div>
  );
};

export default LogoCarousel;
