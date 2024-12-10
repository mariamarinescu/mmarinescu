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
        <div className="float-right mb-1 ml-6 w-2/12">
          <div className="h-full w-full pt-2">
            <img
              src="public/img/me.jpg"
              width="100%"
              height="100%"
              className="rounded-lg object-contain"
            />
          </div>
        </div>
        <p className="custom-prose text-pretty font-serif text-black dark:text-gray-300">
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
