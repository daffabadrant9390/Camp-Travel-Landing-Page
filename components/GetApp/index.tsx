import React from 'react';
import Button from '../Button';
import Image from 'next/image';

const GetApp = () => {
  return (
    <section className="flexCenter flex-col w-full pb-[100px]">
      <div className="get-app">
        {/* LEFT SECTION */}
        <div className="z-20 flex flex-col items-start justify-center w-full flex-1 gap-12">
          <div className="flex flex-col items-start justify-center w-full gap-4">
            <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]">
              Get for free now!
            </h2>
            <p className="regular-16 text-gray-10">
              Available on IOS and Android
            </p>
          </div>
          <div className="w-full flex flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              title="Download on App Store"
              icon="/apple.svg"
              type="button"
              variant="btn_white"
              fullWidth
            />
            <Button
              title="Download on Play Store"
              icon="/android.svg"
              type="button"
              variant="btn_dark_green_outline"
              fullWidth
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-1 items-center justify-end">
          <Image
            src="/phones.png"
            alt="phones-image"
            width={550}
            height={878}
          />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
