'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import { NAV_LINKS } from '@/constants';
import Button from '../Button';

const ChevronIcon = ({ className = '' }: { className?: string }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={className}
  >
    <path d="M6 9l6 6 6-6" />
  </svg>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openSubMenuKey, setOpenSubMenuKey] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
    setOpenSubMenuKey(null);
  }, []);

  // Add a shadow once the page scrolls under the sticky navbar
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // While the mobile menu is open: lock page scroll, close on Escape,
  // close when resized up to desktop, and manage focus
  useEffect(() => {
    if (!isMenuOpen) return;

    const toggleButton = toggleButtonRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    const onDesktop = (e: MediaQueryListEvent) => {
      if (e.matches) closeMenu();
    };

    window.addEventListener('keydown', onKeyDown);
    desktopQuery.addEventListener('change', onDesktop);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      desktopQuery.removeEventListener('change', onDesktop);
      toggleButton?.focus();
    };
  }, [isMenuOpen, closeMenu]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
          isScrolled ? 'shadow-[0_4px_20px_rgba(0,0,0,0.06)]' : ''
        }`}
      >
        <nav
          aria-label="Main"
          className="flexBetween max-container padding-container relative py-4 lg:py-5"
        >
          <Link href="/" aria-label="Hilink home">
            <div className="relative w-20 h-7 flex-shrink-0">
              <Image
                src="/hilink-logo.svg"
                alt="Hilink"
                fill
                priority
                className="bg-cover"
              />
            </div>
          </Link>

          {/* Desktop Nav Items with hover / focus dropdowns */}
          {Array.isArray(NAV_LINKS) && !!NAV_LINKS.length && (
            <ul className="hidden lg:flex items-center h-full gap-10 xl:gap-12">
              {NAV_LINKS.map((navLink) => {
                const { key, href, label, subLinks } = navLink || {};
                const hasSubLinks = !!subLinks?.length;

                return (
                  <li key={key} className="group relative">
                    <Link
                      href={href}
                      className="regular-16 text-gray-50 py-2 flexCenter gap-1 cursor-pointer transition-colors duration-150 hover:text-green-50 group-focus-within:text-green-50"
                    >
                      {label || ''}
                      {hasSubLinks && (
                        <ChevronIcon className="transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                      )}
                    </Link>

                    {hasSubLinks && (
                      <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition-[opacity,transform,visibility] duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-hover:transition-[opacity,transform] group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-focus-within:transition-[opacity,transform]">
                        <ul className="min-w-[220px] rounded-2xl border border-gray-10 bg-white p-2 shadow-xl">
                          {subLinks.map((subLink) => (
                            <li key={subLink.key}>
                              <Link
                                href={subLink.href}
                                className="regular-14 block whitespace-nowrap rounded-xl px-4 py-3 text-gray-50 transition-colors hover:bg-green-50/10 hover:text-green-50 focus:bg-green-50/10 focus:text-green-50 focus:outline-none"
                              >
                                {subLink.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
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

          {/* Mobile Hamburger Button */}
          <button
            ref={toggleButtonRef}
            type="button"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setIsMenuOpen(true)}
            className="relative -mr-2 flexCenter w-11 h-11 rounded-full transition-colors hover:bg-gray-10 lg:hidden"
          >
            <Image src="/menu.svg" alt="" width={28} height={28} />
          </button>
        </nav>
      </header>

      {/* Mobile Menu Drawer (outside <header>: its backdrop-filter would trap a fixed child) */}
      <div
        id="mobile-menu"
        // Become visible instantly on open (so focus can land), but delay
        // hiding on close so the slide-out animation can finish
        className={`fixed inset-0 z-50 overflow-hidden lg:hidden ${
          isMenuOpen
            ? 'visible'
            : 'invisible transition-[visibility] duration-300'
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* Backdrop */}
        <div
          onClick={closeMenu}
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Panel */}
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className={`absolute right-0 top-0 flex h-[100dvh] w-[85%] max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Panel Header */}
          <div className="flexBetween border-b border-gray-10 px-6 py-4">
            <Link href="/" onClick={closeMenu} aria-label="Hilink home">
              <div className="relative w-20 h-7 flex-shrink-0">
                <Image src="/hilink-logo.svg" alt="Hilink" fill />
              </div>
            </Link>
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              className="-mr-2 flexCenter w-11 h-11 rounded-full text-gray-90 transition-colors hover:bg-gray-10"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Panel Links */}
          <ul className="flex-1 overflow-y-auto px-4 py-4">
            {NAV_LINKS.map((navLink) => {
              const { key, href, label, subLinks } = navLink || {};
              const hasSubLinks = !!subLinks?.length;
              const isSubMenuOpen = openSubMenuKey === key;
              const subMenuId = `mobile-submenu-${key}`;

              return (
                <li key={key} className="border-b border-gray-10 last:border-0">
                  <div className="flexBetween">
                    <Link
                      href={href}
                      onClick={closeMenu}
                      className="bold-18 flex-1 px-2 py-4 text-gray-90 transition-colors hover:text-green-50"
                    >
                      {label || ''}
                    </Link>
                    {hasSubLinks && (
                      <button
                        type="button"
                        aria-label={`${isSubMenuOpen ? 'Hide' : 'Show'} ${label} submenu`}
                        aria-expanded={isSubMenuOpen}
                        aria-controls={subMenuId}
                        onClick={() =>
                          setOpenSubMenuKey(isSubMenuOpen ? null : key)
                        }
                        className={`flexCenter w-11 h-11 rounded-full transition-colors hover:bg-gray-10 ${
                          isSubMenuOpen ? 'text-green-50' : 'text-gray-50'
                        }`}
                      >
                        <ChevronIcon
                          className={`transition-transform duration-200 ${
                            isSubMenuOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {hasSubLinks && (
                    <div
                      id={subMenuId}
                      className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                        isSubMenuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                      }`}
                    >
                      <ul className="overflow-hidden">
                        {subLinks.map((subLink) => (
                          <li key={subLink.key}>
                            <Link
                              href={subLink.href}
                              onClick={closeMenu}
                              tabIndex={isSubMenuOpen ? 0 : -1}
                              className="regular-16 ml-2 flex items-center gap-3 rounded-xl px-4 py-3 text-gray-30 transition-colors hover:bg-green-50/10 hover:text-green-50"
                            >
                              <span className="h-1.5 w-1.5 rounded-full bg-green-50" />
                              {subLink.label}
                            </Link>
                          </li>
                        ))}
                        <li className="h-3" aria-hidden="true" />
                      </ul>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Panel Footer */}
          <div className="flex flex-col gap-3 border-t border-gray-10 px-6 py-6">
            <Button
              type="button"
              title="Log In"
              variant="btn_dark_green"
              icon="/user.svg"
              fullWidth
            />
            <Link
              href="#get-app"
              onClick={closeMenu}
              className="bold-16 flexCenter w-full rounded-full border border-green-50 px-8 py-4 text-green-50 transition-colors hover:bg-green-50 hover:text-white"
            >
              Download App
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
