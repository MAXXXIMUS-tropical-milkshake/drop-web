export interface TagProps {
    label: string;
    value: string | string[];
    type?: 'primary' | 'secondary';
}

export interface BeatCardProps {
    title: string;
    audioUrl: string;
    author: string;
    coverImage: string;
    tags: TagProps[];
    useShimmer: boolean;
}

export interface ActionButtonProps {
    icon: string;
    label?: string;
    variant?: 'primary' | 'secondary';
    onClick?: () => void;
}