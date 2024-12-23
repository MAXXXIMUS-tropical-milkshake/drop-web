import * as React from 'react';
import { SearchTagProps } from './types';

export const SearchTag: React.FC<SearchTagProps> = ({ label, isActive }) => {
  return (
    <div className={`overflow-hidden gap-2.5 self-stretch px-4 py-1.5 my-auto whitespace-nowrap rounded-3xl ${
      isActive ? 'bg-white text-black' : 'border-2 border-solid border-neutral-400 text-neutral-400'
    } min-h-[31px]`}>
      {label}
    </div>
  );
};
