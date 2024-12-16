import { useCallback, useEffect, useState } from 'react';

import clsx from 'clsx';

interface ReadMoreReadLessProps {
  text: string;
  limit?: number;
  defaultOpen?: boolean;
}

const DEFAULT_LIMIT = 340;

const ReadMoreReadLess: React.FC<ReadMoreReadLessProps> = ({
  limit = DEFAULT_LIMIT,
  text,
  defaultOpen = false,
}) => {
  const [readMore, setReadMore] = useState(false);
  const [value, setValue] = useState('');
  const trimText = text.length > limit;
  const toggleText = !readMore ? 'more...' : '...less';
  const transition = 'transition-opacity duration-1000 ease-in-out';

  const toggleReadMore = () => setReadMore((prevState) => !prevState);

  const textHandler = useCallback(() => {
    if (readMore) {
      setValue(text);
    } else {
      const trimmedText = !trimText
        ? text
        : `${text.substr(0, text.substr(0, limit).lastIndexOf(' '))}`;
      setValue(trimmedText);
    }
  }, [limit, readMore, trimText, text]);

  useEffect(() => textHandler(), [textHandler]);

  useEffect(() => {
    if (defaultOpen) {
      setReadMore(defaultOpen);
    }
  }, []);

  return (
    <span className="flex h-fit w-fit flex-col rounded-lg text-start">
      <span>
        <span className={clsx(transition, 'content-text-color font-poppins')}>
          {value}
        </span>
        <span
          role="none"
          onClick={toggleReadMore}
          className={clsx(transition, 'mx-2 cursor-pointer text-blue-600')}
        >
          {trimText ? toggleText : null}
        </span>
      </span>
    </span>
  );
};

export default ReadMoreReadLess;
