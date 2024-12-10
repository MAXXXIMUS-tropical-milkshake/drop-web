export interface TagProps {
    label: string;
    value: string | string[];
    type?: 'primary' | 'secondary';
}

export interface BeatCardProps {
    title: string;
    author: string;
    coverImage: string;
    tags: TagProps[];
}

export interface ActionButtonProps {
    icon: string;
    label?: string;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
}