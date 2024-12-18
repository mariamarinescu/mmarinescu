import ReadMoreReadLess from 'modules/app/components/ReadMoreReadLess';
import React from 'react';
import { StepType } from '.';

type StepProps = {
  step: StepType;
  isLast: boolean;
};

export const Step: React.FC<StepProps> = React.memo(({ step, isLast }) => {
  const { title, href, content, completed, icon, skillSet } = step;

  return (
    <div className="flex gap-1 md:gap-3 xl:gap-4">
      <div className="flex flex-col items-center">
        <div className="rounded-full bg-transparent px-2 pb-2">
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
      <div className="flex flex-col gap-4">
        <a
          className="custom-prose-title title-text-color w-fit items-start justify-start text-start font-medium"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex w-full items-start justify-start"> {title}</div>
        </a>

        <p className="content-text-color custom-prose mb-4 text-sm">
          <ReadMoreReadLess text={content} limit={100} defaultOpen />
        </p>
        {/* {skillSet} */}
      </div>
    </div>
  );
});

export default Step;
