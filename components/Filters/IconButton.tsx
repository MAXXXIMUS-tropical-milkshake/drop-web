import * as React from 'react';
import { IconButtonProps } from './types';

export const IconButton: React.FC<IconButtonProps> = ({ src, alt, onClick }) => {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      onClick={onClick}
      tabIndex={0}
      role="button"
      onKeyPress={(e) => e.key === 'Enter' && onClick?.()}
      className="object-contain shrink-0 rounded-3xl aspect-square shadow-[0px_20px_50px_rgba(0,0,0,0.8)] w-[50px] cursor-pointer"
    />
  );
};
