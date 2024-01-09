import { PEOPLE_URL } from '@/constants';
import Image from 'next/image';
import React, { useMemo } from 'react';

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
  const isFirstImage = useMemo(() => {
    return currentCampItemIdx === 0;
  }, [currentCampItemIdx]);

  const isLastImage = useMemo(() => {
    return currentCampItemIdx === campSiteDataLength - 1;
  }, [currentCampItemIdx, campSiteDataLength]);

  return (
    <div
      className={`h-full w-full min-w-[1100px] bg-bg-img-1 bg-cover bg-no-repeat ${
        isFirstImage
          ? 'lg:rounded-r-5xl'
          : isLastImage
          ? 'lg:rounded-l-5xl'
          : 'lg:rounded-5xl'
      } 2xl:rounded-5xl`}
    >
      <div className="h-full flex flex-col justify-between items-start p-6 lg:px-20 lg:py-10">
        {/* Title and Subtitle */}
        <div className="flexCenter gap-4">
          <div className="rounded-full relative flex-shrink-0 bg-green-50 p-4">
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
          <div className="flexCenter gap-4 lg:gap-6">
            <div className="flex -space-x-4 overflow-hidden">
              {PEOPLE_URL.map((peopleUrl, idx) => (
                <Image
                  src={peopleUrl}
                  key={`people-${idx}`}
                  width={52}
                  height={52}
                  alt="people-image"
                  className="inline-block w-10 h-10 rounded-full"
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
