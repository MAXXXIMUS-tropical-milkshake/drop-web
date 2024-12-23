export interface GenreItemProps {
  name: string;
  isSelected?: boolean;
  hasSubItems?: boolean;
  indent?: boolean;
}

export interface SearchTagProps {
  label: string;
  isActive?: boolean;
}

export interface IconButtonProps {
  src: string;
  alt: string;
  onClick?: () => void;
}

export interface FilterBoxProps {
  title: string;
  subtitle: string;
  hasDropdown?: boolean;
}
