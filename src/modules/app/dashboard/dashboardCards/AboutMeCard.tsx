import clsx from 'clsx';
import { Card } from 'components/containers';
import React from 'react';
import { Woman } from './icons';

interface AboutMeCardProps {
  className?: string;
}

export const AboutMeCard: React.FC<AboutMeCardProps> = ({ className }) => {
  return (
    <Card className={clsx('p-4', className)} title="Who am I?">
      <div>
        <div className="float-right mb-1 ml-2 mr-2">
          <Woman className="float-right h-40 w-40" />
        </div>
        <p className="text-md text-justify font-mono text-gray-700 dark:text-gray-300 md:text-lg">
          Away from my keyboard, I love connecting with nature on sunny days, at
          the mountain or at the beach. On rainy days, I swap code for recipes,
          cooking for loved ones and creating connections around the table. I
          also enjoy quiet moments with a book or a brush.
        </p>
      </div>
    </Card>
  );
};
