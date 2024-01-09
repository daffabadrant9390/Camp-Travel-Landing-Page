import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { NAV_LINKS } from '@/constants';
import Button from '../Button';

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <div className="relative w-20 h-7 flex-shrink-0">
          <Image src="/hilink-logo.svg" alt="logo" fill className="bg-cover" />
        </div>
      </Link>

      {/* Desktop Nav Item */}
      {Array.isArray(NAV_LINKS) && !!NAV_LINKS.length && (
        <ul className="hidden lg:flex items-center h-full gap-12">
          {NAV_LINKS.map((navLink) => {
            const {
              key: navLinkKey,
              href: navLinkHref,
              label: navLinkLabel,
            } = navLink || {};

            return (
              <Link
                key={navLinkKey}
                href={navLinkHref}
                className="regular-16 text-gray-50 pb-1.5 flexCenter cursor-pointer transition-all duration-150 hover:font-bold"
              >
                {navLinkLabel || ''}
              </Link>
            );
          })}
        </ul>
      )}

      {/* Desktop Log In Button */}
      <div className="hidden lg:flexCenter">
        <Button
          type="button"
          title="Log In"
          variant="btn_dark_green"
          icon="/user.svg"
        />
      </div>

      {/* Mobile Hamburger Icon */}
      <div className="relative w-8 h-8 flex-shrink-0 cursor-pointer inline-block lg:hidden">
        <Image
          src={'/menu.svg'}
          alt="Mobile Menu Icon"
          fill
          className="bg-cover"
        />
      </div>
    </nav>
  );
};

export default Navbar;
