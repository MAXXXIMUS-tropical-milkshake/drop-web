import React, {
    useContext,
    createContext,
    type PropsWithChildren,
    useState, Dispatch, SetStateAction,
} from "react";

export const FeedIsPlayingContext = createContext<{
    isPlaying: boolean;
    setIsPlaying: Dispatch<SetStateAction<boolean>>;
}>(null);

export function useFeedIsPlaying() {
    const value = useContext(FeedIsPlayingContext);
    if (process.env.NODE_ENV !== "production") {
        if (!value) {
            throw new Error("useSession must be wrapped in a <SessionProvider />");
        }
    }

    return value;
}

export function FeedIsPlayingProvider({children}: PropsWithChildren): React.JSX.Element {
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    return (
        <FeedIsPlayingContext.Provider value={{isPlaying, setIsPlaying}}>
            {children}
        </FeedIsPlayingContext.Provider>
    );
}
