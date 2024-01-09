import Image from 'next/image';

type FeatureItemProps = {
  title: string;
  description: string;
  icon: string;
  variant: string;
};

const FeatureItem = ({
  title,
  description,
  icon,
  variant,
}: FeatureItemProps) => {
  return (
    <li className="flex flex-col items-start w-full flex-1">
      <div
        className={`relative flex-shrink-0 rounded-full p-4 lg:p-7 ${
          variant === 'green' ? 'bg-green-50' : 'bg-orange-50'
        }`}
      >
        <Image
          src={icon || '/'}
          alt={`feature-icon-${title}`}
          width={28}
          height={28}
        />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="regular-16 mt-5 lg:mt-[30px] text-gray-30 bg-white/80 lg:bg-none">
        {description}
      </p>
    </li>
  );
};

export default FeatureItem;
