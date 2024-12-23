import * as React from 'react';
import { GenreItemProps } from './types';

export const GenreItem: React.FC<GenreItemProps> = ({ name, isSelected, hasSubItems, indent }) => {
  return (
    <div className={`flex gap-2.5 items-end ${indent ? 'px-9' : ''} mt-2.5 text-base text-center text-white whitespace-nowrap`}>
      <div className={`flex shrink-0 gap-2.5 w-6 h-6 rounded-xl ${isSelected ? 'bg-white' : 'bg-zinc-500 bg-opacity-10'}`}>
        {isSelected && (
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/20aa43c17537d9bb8375c0cabee197f4c492129e15f2e926e752fba1a40f5684?placeholderIfAbsent=true&apiKey=20be4e0c6a5946abafbccd8ebd52ccdf"
            alt=""
            className="object-contain self-stretch my-auto w-3 aspect-square"
          />
        )}
      </div>
      <div className="gap-1.5 self-stretch">
        {name}
        {hasSubItems && (
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/098cff1bb421a5eb179099faba22ab894050571310b257719fb62ba828d69106?placeholderIfAbsent=true&apiKey=20be4e0c6a5946abafbccd8ebd52ccdf"
            alt=""
            className="object-contain shrink-0 self-stretch my-auto aspect-[1.57] w-[11px]"
          />
        )}
      </div>
    </div>
  );
};
