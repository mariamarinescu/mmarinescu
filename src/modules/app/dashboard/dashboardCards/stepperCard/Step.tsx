import ReadMoreReadLess from 'modules/app/components/ReadMoreReadLess';
import React from 'react';

export interface StepType {
  title: string;
  content: string;
  completed: boolean;
  active: boolean;
  icon: React.ReactNode;
  skillSet: React.ReactNode;
}

type StepProps = {
  step: StepType;
  isLast: boolean;
};

export const Step: React.FC<StepProps> = React.memo(({ step, isLast }) => {
  const { title, content, completed, icon, skillSet } = step;

  return (
    <div className="flex gap-3">
      <div className="flex flex-col items-center">
        <div className="rounded-full bg-transparent p-2">
          <div className="m-1 flex size-10 items-center justify-center rounded-full bg-transparent">
            {icon}
          </div>
        </div>
        {!isLast && (
          <div
            className={`border ${completed ? 'border-black' : 'border-gray-300'} h-full transition-all duration-300`}
          />
        )}
      </div>
      <div>
        <h3 className="md:text-md custom-prose-title title-text-color mt-1 text-sm font-medium lg:text-lg">
          {title}
        </h3>
        <p className="md:text-md content-text-color custom-prose mb-4 text-sm">
          <ReadMoreReadLess text={content} limit={100} />
        </p>
        {skillSet}
      </div>
    </div>
  );
});

export default Step;
