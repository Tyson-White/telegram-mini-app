import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import BackButton from "./components/reusable/back-button.tsx"
import { init, backButton, useLaunchParams } from '@telegram-apps/sdk-react';

init();

backButton.mount();
function Component() {
    const lp = useLaunchParams();
    return <div>Start parametr: {lp.startParam}</div>
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
          <App />
          <Component />
          <BackButton />
    </StrictMode>,
)
