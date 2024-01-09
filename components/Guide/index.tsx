import Image from 'next/image';
import React from 'react';

const Guide = () => {
  return (
    <section className="flexCenter flex-col">
      {/* Heading, Title, and Subtitle */}
      <div className="padding-container max-container w-full pb-24">
        <div className="relative flex-shrink-0 w-12 h-12">
          <Image src="/camp.svg" alt="camp" fill />
        </div>
        <p className="text-green-50 uppercase regular-18 -mt-1 mb-3">
          We are here for you
        </p>

        {/* Title and Subtitle */}
        <div className="flex flex-wrap justify-between gap-5">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
            Guide You to Easy Path
          </h2>
          <p className="regular-16 text-gray-30 xl:max-w-[520px]">
            Only with the hilink application you will no longer get lost and get
            lost again, because we already support offline maps when there is no
            internet connection in the field. Invite your friends, relatives and
            friends to have fun in the wilderness through the valley and reach
            the top of the mountain
          </p>
        </div>
      </div>

      <div className="w-full flexCenter max-container relative">
        <Image
          src="/boat.png"
          width={1440}
          height={580}
          alt="boat"
          className="w-full object-cover object-center 2xl:rounded-5xl"
        />

        <div className="absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20">
          <Image
            src="/meter.svg"
            alt="meter-image"
            width={16}
            height={158}
            className="h-full w-auto"
          />

          <div className="flexBetween flex-col">
            <div className="flex flex-col w-full">
              <div className="flexBetween w-full">
                <p className="regular-16 text-gray-20">Destination</p>
                <p className="bold-16 text-green-50">48 mins</p>
              </div>
              <p className="bold-20 mt-2">Aguas Calientes</p>
            </div>

            <div className="flex w-full flex-col">
              <p className="regular-16 text-gray-20">Start track</p>
              <h4 className="bold-20 whitespace-nowrap mt-2">
                Wonorejo Pasuruan
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
