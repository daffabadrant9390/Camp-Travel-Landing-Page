import React from 'react';
import CampSite from './components/CampSite';
import Image from 'next/image';
import { CAMP_SITE } from '@/constants';

const Camp = () => {
  return (
    <section className="relative 2xl:max-container flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      {/* CampSite Images */}
      <div className="hide-scrollbar w-full flex items-start justify-start gap-8 overflow-x-auto h-[340px] lg:h-[400px] xl:h-[640px]">
        {(CAMP_SITE || []).map((campSiteItem, idx) => {
          const { title, subtitle, backgroundImage, numberOfPeopleJoined } =
            campSiteItem || {};

          return (
            <CampSite
              key={idx}
              backgroundImage={backgroundImage}
              title={title || ''}
              subtitle={subtitle || ''}
              peopleJoined={numberOfPeopleJoined || 0}
              campSiteDataLength={CAMP_SITE.length}
              currentCampItemIdx={idx}
            />
          );
        })}
      </div>

      {/* Floating Card */}
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 relative w-full rounded-3xl overflow-hidden lg:px-16 lg:py-20 lg:rounded-5xl lg:max-w-[500px] xl:max-w-[734px]">
          <h2 className="regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Feeling Lost</strong> And Not Knowing The Way?
          </h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            Starting from the anxiety of the climbers when visiting a new
            climbing location, the possibility of getting lost is very large.
            That's why we are here for those of you who want to start an
            adventure
          </p>
          {/* Background Image Quote */}
          <Image
            src="/quote.svg"
            alt="camp-quote-bg"
            width={186}
            height={219}
            className="camp-quote"
          />
        </div>
      </div>
    </section>
  );
};

export default Camp;
