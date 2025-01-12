import React from 'react';
import { StepType } from '.';

type StepProps = {
  step: StepType;
  isLast: boolean;
};

export const Step: React.FC<StepProps> = React.memo(({ step, isLast }) => {
  const { title, href, content, completed, icon } = step;

  return (
    <div className="flex gap-1 md:gap-3 xl:gap-4">
      <div className="flex flex-col items-center">
        <div className="rounded-full bg-transparent">
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
      <div className="flex flex-col gap-2">
        <div className="m-0 flex h-fit w-full items-start justify-start p-0">
          <a className="" href={href} target="_blank" rel="noopener noreferrer">
            <p
              className="p-0custom-prose-title title-text-color m-0 text-start font-medium"
              style={{ margin: 0 }}
            >
              {title}
            </p>
          </a>
        </div>

        <p className="content-text-color custom-prose mb-4 text-sm">
          {content}
        </p>
      </div>
    </div>
  );
});

export default Step;
