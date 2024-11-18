import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import BackButton from "./components/reusable/back-button.tsx"
import { init, backButton } from '@telegram-apps/sdk-react';

init();

backButton.mount();

createRoot(document.getElementById('root')!).render(
    <StrictMode>
          <App />
          <BackButton />
    </StrictMode>,
)
