import clsx from 'clsx';
import { Card } from 'components/containers';
import React from 'react';

interface AboutMeCardProps {
  className?: string;
}

export const AboutMeCard: React.FC<AboutMeCardProps> = ({ className }) => {
  return (
    <Card className={clsx(className)} title="Who am I?">
      <div>
        <div className="float-right mb-1 ml-3 w-6/12 xl:mb-3 xl:ml-6 xl:w-5/12">
          <div className="h-full w-full pt-2">
            <img
              src="public/img/me.jpg"
              width="100%"
              height="100%"
              className="rounded-lg object-contain"
            />
          </div>
        </div>
        <p className="custom-prose font-poppins text-pretty text-black dark:text-gray-300">
          Away from my keyboard, I love connecting with nature on sunny days, at
          the mountain or at the beach. On rainy days, I swap code for recipes,
          cooking for loved ones and creating connections around the table. I
          also enjoy quiet moments with a book or maybe a brush and riding my
          bicycle through the city.
        </p>
      </div>
    </Card>
  );
};
