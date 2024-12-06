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
        <p className="text-justify font-mono text-gray-700 dark:text-gray-300">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
    </Card>
  );
};
