import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import { DAppProvider, Goerli, Mainnet } from '@usedapp/core';
// import { getDefaultProvider } from 'ethers'

// const config = {
//   readOnlyChainId: Mainnet.chainId,
//   readOnlyUrls: {
//     [Mainnet.chainId]: getDefaultProvider('mainnet'),
//     [Goerli.chainId]: getDefaultProvider('goerli'),
//   },
// };


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* <DAppProvider config={config}> */}
      <App />
    {/* </DAppProvider> */}
  </React.StrictMode>
);

