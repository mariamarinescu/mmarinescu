import clsx from 'clsx';
import { ButtonWithTooltip } from 'components/buttons';
import { Card } from 'components/containers';
import { FC, useState } from 'react';
import ReactGA from 'react-ga4';
import { useRecoilValue } from 'recoil';
import darkThemeAtom from 'src/store/darkTheme/atom';
import { ContactModal } from './contactCard/ContactModal';
import { EmailIcon } from './icons';

interface AboutMeCardProps {
  className?: string;
}

export const AboutMeCard: FC<AboutMeCardProps> = ({ className }) => {
  const isDarkThemeActive = useRecoilValue(darkThemeAtom);
  const [isContactModalOpen, setContactModalOpen] = useState(false);

  const toggleContactModal = () => {
    ReactGA.event({
      category: 'User',
      action: 'Opened contact modal',
    });
    setContactModalOpen((prevState) => !prevState);
  };

  return (
    <>
      <Card
        className={clsx(className)}
        title="Who am I?"
        data-testid="about-me-card"
      >
        <div className="flex h-full w-full flex-col justify-between">
          <div>
            <div className="float-right w-3/12 md:w-6/12 xl:w-6/12">
              <img
                src="./img/me.jpg"
                width="100%"
                height="100%"
                className="rounded-lg object-contain"
                alt="Image not found!"
                data-testid="about-me-image"
              />
            </div>
            <p
              className="custom-prose content-text-color text-pretty font-poppins"
              data-testid="about-me-description"
            >
              I am a passionate nature lover who enjoys exploring the diverse
              natural spaces of Berlin. I love spending my weekends camping in
              the mountains and exploring the city's beautiful forests and
              parks. On rainy days, I enjoy cooking and playing video games with
              my loved ones. I am a fan of strategy and RPG games, but I have
              not had much time to play them recently. I also enjoy reading and
              riding my bicycle around the city.
            </p>
          </div>
          <div className="h-inherit align-center mt-3 flex w-full flex-wrap items-center justify-end">
            <ButtonWithTooltip
              label="Contact"
              className="w-32 justify-start"
              onClick={toggleContactModal}
              icon={
                <EmailIcon
                  className="h-6 w-6"
                  isDarkThemeActive={isDarkThemeActive}
                />
              }
              dataTooltipContent="Contact me"
              dataTooltipId="contact-me-button"
              data-testid="contact-button"
            />
          </div>
        </div>
      </Card>
      <ContactModal open={isContactModalOpen} onClose={toggleContactModal} />
    </>
  );
};
