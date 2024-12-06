import clsx from 'clsx';
import { Card } from 'components/containers';
import React from 'react';

interface AboutMeCardProps {
  className?: string;
}

export const AboutMeCard: React.FC<AboutMeCardProps> = ({ className }) => {
  return (
    <Card className={clsx('p-4', className)} title="Who am I?">
      <div>
        <div className="float-right mb-1 ml-2 mr-2 w-4/12">
          <img
            src="public/img/mountain-6783202_1280.png"
            width="100%"
            height="100%"
          />
        </div>
        <p className="main-text-size prose text-justify font-serif text-gray-700 lg:prose-xl dark:text-gray-300">
          Away from my keyboard, I love connecting with nature on sunny days, at
          the mountain or at the beach. On rainy days, I swap code for recipes,
          cooking for loved ones and creating connections around the table. I
          also enjoy quiet moments with a book or a brush.
        </p>
      </div>
    </Card>
  );
};
