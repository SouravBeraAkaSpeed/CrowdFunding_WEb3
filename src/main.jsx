import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { StateContextProvider } from './context'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'


const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <ThirdwebProvider desiredChainId={ChainId.Goerli}>
        <Router>
            <StateContextProvider>
                <App />
            </StateContextProvider>
        </Router>
    </ThirdwebProvider>
)