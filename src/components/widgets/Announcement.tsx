/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { announcementData } from '~/shared/data/global.data';

const Announcement = () => {
  const { title, callToAction, callToAction2 } = announcementData;

  return (
    <div className="text-center overflow-hidden text-ellipsis whitespace-nowrap border-b border-blue-900 bg-blue-900 px-3 py-2 text-sm text-gray-200 md:text-left">
      <span className="bg-blue-800 py-0.5 px-1 text-xs font-semibold">{title}</span>{' '}
      {callToAction && callToAction.text && callToAction.href && (
        <Link
          href={callToAction.href}
          // target="_blank"
          // rel="noreferrer noopened"
          className="cursor-pointer text-gray-100 hover:underline"
        >
          {callToAction.icon && <callToAction.icon className="mr-1 -ml-1.5 h-5 w-5" />} {callToAction.text}
        </Link>
      )}
      {callToAction2 && callToAction2.text && callToAction2.href && (
        <a
          href={callToAction2.href}
          target="_blank"
          rel="noreferrer"
          className="float-right rtl:float-left hidden md:flex"
          title={callToAction2.text}
        >
          <img
            src="https://img.shields.io/twitter/url/https/twitter.com/genius_contest.svg?style=social&amp;label=Follow%20%40genius_contest"
            alt="Follow @genius_contest"
            width="125"
            height="20"
          />
        </a>
      )}
    </div>
  );
};

export default Announcement;