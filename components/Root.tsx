'use client';

import {type PropsWithChildren, useEffect} from 'react';
import {
    initData,
    miniApp,
    useLaunchParams,
    useSignal,
} from '@telegram-apps/sdk-react';
import {AppRoot} from '@telegram-apps/telegram-ui';

import {useClientOnce} from '@/hooks/useClientOnce';
import {init} from '@/core/init';

import {useDidMount} from "@/hooks/useDidMount";

function RootInner({children}: PropsWithChildren) {

    const lp = useLaunchParams();
    useClientOnce(() => {
        init(false);
    });

    return (
        <AppRoot
            platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
        >
            {children}
        </AppRoot>
    );
}

export function Root(props: PropsWithChildren) {
    // Unfortunately, Telegram Mini Apps does not allow us to use all features of
    // the Server Side Rendering. That's why we are showing loader on the server
    // side.
    const didMount = useDidMount();

    return (didMount ? (

        <RootInner {...props}/>

    ) : (<div className="root__loading">Loading</div>));
}