import { FEATURES } from '@/constants';
import Image from 'next/image';
import React from 'react';
import FeatureItem from './FeatureItem';

const Features = () => {
  return (
    <section className="flexCenter bg-feature-bg bg-no-repeat bg-center py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src={'/phone.png'}
            alt="Phone Image"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        {/* RIGHT SECTION */}
        <div className="z-20 w-full flex flex-col lg:w-[60%]">
          {/* Title */}
          <div className="relative">
            <Image
              src={'/camp.svg'}
              alt="Camp Icon"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-32px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Our Features</h2>
          </div>

          {/* Features */}
          <ul className="mt-10 lg:mt-20 grid md:grid-cols-2 gap-10 lg:gap-20">
            {(FEATURES || []).map((feature, idx) => {
              const { title, variant, description, icon } = feature || {};

              return (
                <FeatureItem
                  key={`feature-item-${idx}`}
                  title={title || ''}
                  variant={variant || ''}
                  description={description || ''}
                  icon={icon || ''}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
