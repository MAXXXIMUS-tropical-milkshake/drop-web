import * as React from 'react';
import { FilterBoxProps } from './types';

export const FilterBox: React.FC<FilterBoxProps> = ({ title, subtitle, hasDropdown }) => {
  return (
    <div className="flex flex-col p-6 border border-solid bg-[linear-gradient(0deg,rgba(61,61,61,0.50_0%,rgba(61,61,61,0.50)_100%),rgba(127,127,127,0.40))] border-neutral-600 border-opacity-30 rounded-[34px] w-[181px]">
      <div className="flex gap-2.5 items-center self-start text-2xl text-white whitespace-nowrap">
        <div className="self-stretch my-auto">{title}</div>
        {hasDropdown && (
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/bf4ae2417664e0dd71becbad44e21c55f389ab9706a6829e373f5ce65633f52f?placeholderIfAbsent=true&apiKey=20be4e0c6a5946abafbccd8ebd52ccdf"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-[0.6] w-[9px]"
          />
        )}
      </div>
      <div className="mt-9 text-base text-neutral-400">{subtitle}</div>
    </div>
  );
};
