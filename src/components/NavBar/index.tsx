import React from 'react';
import { chainId, useAccount, useConnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { Button, Tab, Tabs, Toolbar } from '@mui/material';
import { CurrencyExchange, History as HistoryIcon } from '@mui/icons-material';

import SwapCard from '../../pages/SwapCard';
import History from '../../pages/History';

const NavBar = () => {
  const { address } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
    chainId: chainId.goerli
  });

  const [tabIndex, setTabIndex] = React.useState(0);
  const handleTabChange = (e: any, _tabIndex: number) => {
    setTabIndex(_tabIndex);
  };

  return (
    <div className="h-full">
      <Toolbar className="flex flex-col md:flex-row justify-between">
        <Tabs value={tabIndex} onChange={handleTabChange}>
          <Tab icon={<CurrencyExchange />} label="Swap" />
          <Tab icon={<HistoryIcon />} label="History" />
        </Tabs>
        <div>
          {address ? (
            <p>Connected to: {address}</p>
          ) : (
            <Button
              onClick={() => {
                connect();
              }}
              variant="outlined"
            >
              Connect Wallet
            </Button>
          )}
        </div>
      </Toolbar>
      {tabIndex === 0 && <SwapCard />}
      {tabIndex === 1 && <History />}
    </div>
  );
};

export default NavBar;
