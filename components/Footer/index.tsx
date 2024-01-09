import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FooterColumn from './FooterColumn';

const Footer = () => {
  return (
    <footer className="flexCenter mb-16 md:mb-24">
      <div className="max-container padding-container flex flex-col w-full gap-14">
        <div className="flex flex-col md:flex-row items-start justify-center gap-[10%]">
          <Link href="/" className="mb-10">
            <Image
              src="hilink-logo.svg"
              alt="hilink-footer-logo"
              width={74}
              height={29}
            />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((footerLink, idx) => {
              const { links, title } = footerLink || {};

              return (
                <FooterColumn key={idx} title={title}>
                  <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                    {links.map((linkItem) => (
                      <Link href="/" key={linkItem}>
                        {linkItem}
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
              );
            })}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((contactLinkItem) => {
                  const { label, value } = contactLinkItem || {};

                  return (
                    <Link
                      href="/"
                      key={label}
                      className="flex gap-4 md:flex-col lg:flex-row"
                    >
                      <p className="whitespace-nowrap">{`${label}:`}</p>
                      <p className="whitespace-nowrap medium-14 text-blue-70">
                        {value}
                      </p>
                    </Link>
                  );
                })}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="flex gap-4">
                  {SOCIALS.links.map((socialMediaLinkItem, idx) => (
                    <Link href="/" key={`social-media-item-icon-${idx}`}>
                      <div className="relative flex-shrink-0 w-6 h-6">
                        <Image
                          src={socialMediaLinkItem}
                          alt={socialMediaLinkItem}
                          fill
                        />
                      </div>
                    </Link>
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
