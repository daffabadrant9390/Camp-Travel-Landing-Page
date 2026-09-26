import { PEOPLE_URL } from '@/constants';
import Image from 'next/image';
import React from 'react';

type CampSiteProps = {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: number;
  campSiteDataLength: number;
  currentCampItemIdx: number;
};

const CampSite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
  campSiteDataLength,
  currentCampItemIdx,
}: CampSiteProps) => {
  const isFirstImage = currentCampItemIdx === 0;
  const isLastImage = currentCampItemIdx === campSiteDataLength - 1;

  return (
    <div
      className={`relative h-full w-[85%] flex-shrink-0 snap-start overflow-hidden rounded-3xl bg-cover bg-center bg-no-repeat sm:w-[75%] lg:w-[1100px] lg:rounded-none ${
        backgroundImage || 'bg-bg-img-1'
      } ${
        isFirstImage
          ? 'lg:rounded-r-5xl'
          : isLastImage
            ? 'lg:rounded-l-5xl'
            : 'lg:rounded-5xl'
      } 2xl:rounded-5xl`}
    >
      {/* Soft gradient keeps the white text readable on any photo */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />

      <div className="relative h-full flex flex-col justify-between items-start p-5 sm:p-6 lg:px-20 lg:py-10">
        {/* Title and Subtitle */}
        <div className="flexCenter gap-3 sm:gap-4">
          <div className="rounded-full relative flex-shrink-0 bg-green-50 p-3 sm:p-4">
            <Image
              src="/folded-map.svg"
              alt="map-icon"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        {/* People Joined */}
        {!!peopleJoined && (
          <div className="flexCenter gap-3 sm:gap-4 lg:gap-6">
            <div className="flex -space-x-3 sm:-space-x-4 overflow-hidden">
              {PEOPLE_URL.map((peopleUrl, idx) => (
                <Image
                  src={peopleUrl}
                  key={`people-${idx}`}
                  width={52}
                  height={52}
                  alt="people-image"
                  className="inline-block w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-white"
                />
              ))}
            </div>
            <p className="bold-16 lg:bold-20 text-white">{`${peopleJoined}+ Joined`}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampSite;
