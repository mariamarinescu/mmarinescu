import clsx from 'clsx';
import { ButtonWithTooltip } from 'components/buttons';
import { Card } from 'components/containers';
import { FC, useState } from 'react';
import ReactGA from 'react-ga4';
import { ContactModal } from './contactCard/ContactModal';
import { EmailIcon } from './icons';

interface AboutMeCardProps {
  className?: string;
}

export const AboutMeCard: FC<AboutMeCardProps> = ({ className }) => {
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
                src="./img/me.webp"
                width="800"
                height="600"
                className="rounded-lg object-contain"
                alt="Image not found!"
                data-testid="about-me-image"
              />
            </div>
            <p
              className="custom-prose content-text-color text-pretty font-sans"
              data-testid="about-me-description"
            >
              I am in love with nature and I enjoy exploring the diverse natural
              spaces of Berlin. I love the city's beautiful forests and parks,
              also love camping in the mountains. On rainy days, I enjoy cooking
              and playing video games with my loved ones. I am a fan of strategy
              and RPG games and I am proud of my cooking skills. I also enjoy
              reading and riding my bicycle around the city.
            </p>
          </div>
          <div className="h-inherit align-center mt-3 flex w-full flex-wrap items-center justify-end">
            <ButtonWithTooltip
              id="contact-button"
              label="Contact"
              className="w-32 justify-start"
              onClick={toggleContactModal}
              icon={<EmailIcon className="h-6 w-6" />}
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
