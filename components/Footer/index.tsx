import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FooterColumn from './FooterColumn';

const Footer = () => {
  return (
    <footer id="contact" className="flexCenter mb-12 md:mb-24">
      <div className="max-container padding-container flex flex-col w-full gap-10 md:gap-14">
        <div className="flex flex-col md:flex-row items-start justify-center gap-[10%]">
          <Link href="/" className="mb-8 md:mb-10">
            <Image
              src="/hilink-logo.svg"
              alt="hilink-footer-logo"
              width={74}
              height={29}
            />
          </Link>

          <div className="grid w-full grid-cols-2 gap-x-6 gap-y-10 sm:flex sm:flex-wrap sm:justify-between sm:gap-10 md:flex-1">
            {FOOTER_LINKS.map((footerLink, idx) => {
              const { links, title } = footerLink || {};

              return (
                <FooterColumn key={idx} title={title}>
                  <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                    {links.map((linkItem) => (
                      <li key={linkItem}>
                        <Link
                          href="/"
                          className="transition-colors hover:text-green-50"
                        >
                          {linkItem}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </FooterColumn>
              );
            })}

            <div className="col-span-2 flex flex-col gap-5 sm:col-span-1">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                <ul className="flex flex-col gap-4">
                  {FOOTER_CONTACT_INFO.links.map((contactLinkItem) => {
                    const { label, value } = contactLinkItem || {};

                    return (
                      <li key={label}>
                        <Link
                          href="/"
                          className="flex flex-wrap gap-x-4 gap-y-1 md:flex-col lg:flex-row"
                        >
                          <p className="regular-14 whitespace-nowrap text-gray-30">{`${label}:`}</p>
                          <p className="medium-14 break-all text-blue-70">
                            {value}
                          </p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </FooterColumn>
            </div>

            <div className="col-span-2 flex flex-col gap-5 sm:col-span-1">
              <FooterColumn title={SOCIALS.title}>
                <ul className="flex gap-4">
                  {SOCIALS.links.map((socialMediaLinkItem, idx) => (
                    <li key={`social-media-item-icon-${idx}`}>
                      <Link
                        href="/"
                        className="flexCenter -m-2 p-2 transition-opacity hover:opacity-70"
                      >
                        <div className="relative flex-shrink-0 w-6 h-6">
                          <Image
                            src={socialMediaLinkItem}
                            alt={socialMediaLinkItem}
                            fill
                          />
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />

        <p className="regular-14 w-full text-center text-gray-30">
          2023 Hilink | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
