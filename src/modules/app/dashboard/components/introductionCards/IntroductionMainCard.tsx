import clsx from 'clsx';
import { SimpleButton } from 'components/buttons';
import { MdOutlineFileDownload } from 'react-icons/md';

interface IntroductionMainCardProps {
  style?: string;
}

export const IntroductionMainCard: React.FC<IntroductionMainCardProps> = ({
  style,
}) => {
  return (
    <div
      className={clsx(
        style,
        'h-[94%] bg-white dark:bg-darker-gray-1 border-darker-gray-1 border rounded-r-lg md:rounded-r-none p-8'
      )}
    >
      <div className="w-full h-full text-black dark:text-white flex flex-col gap-2">
        <div className="overflow-scroll w-full h-full text-md lg:text-lg xl:text-lg">
          <div className="p-8 text-lg leading-relaxed">
            <span className="first-letter">Hi! I'm Maria</span>
            <p>
              , a frontend software developer based in Berlin. I bring four
              years of experience with React.js, building and refining
              interfaces in fintech and podcast analytics.
              <br />
              <br />
              In the photo gallery, you can see one of my key projects—a podcast
              marketing analytics platform I developed at Voxalyze. This was a
              rewarding challenge that pushed my skills to new heights.
              <br />
              <br />
              By clicking the button below, you can access my CV and get to know
              me better!
            </p>
          </div>
          {/* <p>
            <b>
              &nbsp;&#128075; Hi! I'm Maria, a frontend software developer based
              in Berlin!
            </b>
            <br />
            &nbsp; I bring four years of experience with React.js, building and
            refining interfaces in fintech and podcast analytics.
            <br />
            <b>
              &nbsp; In the photo gallery, you can see one of my key projects—a
              podcast marketing analytics platform I developed at Voxalyze.
            </b>
            This was a rewarding challenge that pushed my skills to new heights.
            <br />
            &nbsp; By clicking the button below, you can access my CV and get to
            know me better!
          </p> */}
        </div>

        <div className="flex w-full h-inherit justify-end gap-1 align-center">
          {/* <button
            className={clsx(
              'flex items-center px-4 py-2 h-8 font-medium tracking-wide text-white capitalize',
              'transition-colors duration-300 transform bg-white border-darker-gray-1 border rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80'
            )}
          > */}
          <SimpleButton className="text-black hover:text-white">
            <MdOutlineFileDownload size={20} />
            <a
              className="mx-1 text-md lg:text-lg inline-block"
              href="https://drive.google.com/file/d/1U9z0-8gRL1Wjevx0Whm2Hq9U9AzsjLtV/view?usp=sharing"
              download="MMResume.pdf"
              data-tooltip-id="my-tooltip"
              data-tooltip-content="Download resume"
              data-tooltip-place="bottom"
              target="_blank"
            >
              Resume
            </a>
          </SimpleButton>
        </div>
      </div>
    </div>
  );
};
