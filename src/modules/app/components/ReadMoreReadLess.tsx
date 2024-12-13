import { useCallback, useEffect, useState } from 'react';

import clsx from 'clsx';

interface PropTypes {
  text: string;
  limit?: number;
  fontSize?: string;
}

const DEFAULT_LIMIT = 340;

const ReadMoreReadLess = ({
  limit = DEFAULT_LIMIT,
  text,
  fontSize = 'text-sm',
}: PropTypes) => {
  const [readMore, setReadMore] = useState(false);
  const [value, setValue] = useState('');
  const trimText = text.length > limit;
  const toggleText = !readMore ? 'more...' : '...less';
  const transition = 'transition-opacity duration-1000 ease-in-out';

  const toggleReadMore = useCallback(() => {
    setReadMore(!readMore);
  }, [readMore]);

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

  return (
    <div className="flex h-fit w-fit flex-col rounded-lg text-start">
      <span>
        <span
          className={clsx(
            fontSize,
            transition,
            'font-poppins content-text-color'
          )}
        >
          {value}
        </span>
        <span
          role="none"
          onClick={toggleReadMore}
          className={clsx(
            fontSize,
            transition,
            'mx-2 cursor-pointer text-blue-600'
          )}
        >
          {trimText ? toggleText : null}
        </span>
      </span>
    </div>
  );
};

export default ReadMoreReadLess;
