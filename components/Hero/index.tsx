import Image from 'next/image';
import React from 'react';
import Button from '../Button';

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      {/* LEFT SECTION */}
      <div className="relative z-20 flex flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />

        <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>

        {/* Star Rating & Number of Reviews */}
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flexCenter gap-2">
            {[...new Array(5)].map((_, idx) => (
              <div
                className="relative w-6 h-6 flex-shrink-0"
                key={`star-rating-${idx}`}
              >
                <Image src="/star.svg" alt="Star Review Icon" fill />
              </div>
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excellent Reviews
            </span>
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row w-full gap-3">
          {/* Download App Button */}
          <Button type="button" title="Download App" variant="btn_green" />

          {/* How we work Button */}
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex flex-col w-[268px] gap-8 rounded-3xl bg-green-90 px-7 py-8">
          {/* Location Content */}
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-gray-20">Location</p>
              <div className="relative w-6 h-6 flex-shrink-0">
                <Image src="/close.svg" alt="Close Button" fill />
              </div>
            </div>
            <p className="bold-20 text-white">Aguas Calientes</p>
          </div>

          {/* Distance & Elevation */}
          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 text-gray-20">Distance</p>
              <p className="bold-20 text-white">173.28 mi</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 text-gray-20">Elevation</p>
              <p className="bold-20 text-white">2.040 km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
