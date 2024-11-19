import { createRoot } from 'react-dom/client'
import './index.css'

import { init, backButton, useSignal, useLaunchParams } from '@telegram-apps/sdk-react';
import { useEffect } from 'react';

init();

backButton.mount();

function Component() {
    const lp = useLaunchParams();
    return <div>Start parametr: {lp.startParam}</div>
}

const BackButton = () => {

    const isVisible = useSignal(backButton.isVisible)

    useEffect(() => {
        console.log('The button is', isVisible ? 'visible' : 'invisible');
    }, [isVisible])

    useEffect(() => {
        backButton.show();

        return () => {
            backButton.hide();
        }
    }, [])

  return null
}

createRoot(document.getElementById('root')!).render(
    <BackButton />
)
