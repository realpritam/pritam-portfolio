import React from "react";

export interface Props {
  description: string;
  linkText: string;
  linkHref: string;
}
export const ProjectDetails = ({ description, linkText, linkHref }: Props) => {
  return (
    <div className="collapse-conten mb-3 border-t border-white/20 px-4">
      <p className="text-gray-300 mt-3">{description}</p>
      <div className="flex flex-row items-center space-x-2">
        <a
          className="flex items-center w-fit space-x-1 bg-white bg-opacity-20 rounded-full px-5 py-2 text-sm mt-3 transition-transform hover:scale-[102%]"
          href={linkHref}
          target="_blank"
          rel="noreferrer"
        >
          <span>{linkText}</span>
          <svg
            stroke="currentColor"
            fill="none"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke-linecap="round"
            stroke-linejoin="round"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>
      </div>
    </div>
  );
};
