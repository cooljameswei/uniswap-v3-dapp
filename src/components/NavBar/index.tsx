import React from 'react';
import { useAccount, useConnect } from 'wagmi';
import { goerli } from 'wagmi/chains';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { Button, Tab, Tabs, Toolbar } from '@mui/material';
import { CurrencyExchange, History as HistoryIcon } from '@mui/icons-material';

import SwapCard from '../../pages/SwapCard';
import History from '../../pages/History';

const NavBar = () => {
  const { address } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
    chainId: goerli.id
  });

  const [tabIndex, setTabIndex] = React.useState(0);
  const handleTabChange = (e: any, _tabIndex: number) => {
    setTabIndex(_tabIndex);
  };

  return (
    <div className="h-full">
      <Toolbar className="flex flex-col md:flex-row justify-between">
        <Tabs
          value={tabIndex}
          onChange={handleTabChange}
          sx={{
            '.MuiTab-root': { color: 'rgba(222,222,222,0.55)' },
            '.Mui-selected': {
              color: '#bfdbfe'
            }
          }}
        >
          <Tab icon={<CurrencyExchange />} label="Swap" />
          <Tab icon={<HistoryIcon />} label="History" />
        </Tabs>
        <div>
          {address ? (
            <p>
              <span className="text-white">Connected to: </span>
              <span className="text-blue-200 underline">{address}</span>
            </p>
          ) : (
            <Button
              onClick={() => {
                connect();
              }}
              variant="contained"
              className="!text-white"
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
