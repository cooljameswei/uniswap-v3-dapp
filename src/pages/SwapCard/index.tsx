import React from 'react';
import { ethers } from 'ethers';
import { useAccount, useBalance } from 'wagmi';
import { Button, LinearProgress, TextField } from '@mui/material';

import useSwap from '../../hooks/useSwap';

const SwapCard = () => {
  const [amount, setAmount] = React.useState(0);
  const [quote, setQuote] = React.useState(0);
  const [isLoading, setIsLoading] = React.useState(false);
  const [showFromTokenInput, setShowFromTokenInput] = React.useState(false);
  const [showToTokenInput, setShowToTokenInput] = React.useState(false);
  const [isExceedBalance, setIsExceedBalance] = React.useState(false);
  const [isInvalidFromToken, setIsInvalidFromToken] = React.useState(false);
  const [isInvalidToToken, setIsInvalidToToken] = React.useState(false);
  const [fromToken, setFromToken] = React.useState('0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6');
  const [toToken, setToToken] = React.useState('0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984');
  const [fromTokenAmount, setFromTokenAmount] = React.useState('');

  const { swap, getQuote } = useSwap(fromToken, toToken);
  const { address } = useAccount();
  const { data: FromTokenBalance } = useBalance({
    addressOrName: address,
    token: fromToken as `0x${string}`,
    watch: true
  });
  const { data: ToTokenBalance } = useBalance({
    addressOrName: address,
    token: toToken as `0x${string}`,
    watch: true
  });

  const onChangeAmountInput = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const amountIn = parseFloat(event.target.value || '0');
    setFromTokenAmount(event.target.value || '');
    if (amountIn > parseFloat(FromTokenBalance?.formatted || '0')) {
      setIsExceedBalance(true);
    } else {
      setIsExceedBalance(false);
    }

    setAmount(amountIn);
    const quote = await getQuote(amountIn);
    setQuote(quote);
  };

  const onClickSwapButton = async () => {
    setIsLoading(true);
    const txn = await swap(amount);
    await txn.wait();
    setIsLoading(false);
  };

  const onClickFromToken = () => {
    setShowFromTokenInput(!showFromTokenInput);
  };

  const onClickToToken = () => {
    setShowToTokenInput(!showToTokenInput);
  };

  const onChangeFromToken = (value: any) => {
    if (ethers.utils.isAddress(value)) {
      setIsInvalidFromToken(false);
      setFromToken(value);
    } else {
      setIsInvalidFromToken(true);
    }

    console.log("it's changed");
    setFromTokenAmount('');
    setIsExceedBalance(false);
  };

  const onChangeToToken = (value: any) => {
    if (ethers.utils.isAddress(value)) {
      setIsInvalidToToken(false);
      setToToken(value);
    } else {
      setIsInvalidToToken(true);
    }
  };

  return (
    <>
      {isLoading && <LinearProgress />}
      <div className="bg-secondary-background-color p-8 absolute w-full lg:w-1/2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg flex flex-col gap-8 border">
        <div>
          <div className="flex">
            <TextField
              className="flex-1"
              type="text"
              value={fromToken}
              placeholder="From Token Address"
              disabled={address ? false : true}
              hidden={!showFromTokenInput}
              onChange={(event) => onChangeFromToken(event.target.value)}
            />
          </div>
          <p className="text-xs ml-1.5 mt-1 text-red-500" hidden={!showFromTokenInput || !isInvalidFromToken}>
            From Token is Invalid.
          </p>
        </div>

        <div>
          <div className="flex">
            <TextField
              className="flex-1"
              type="text"
              value={fromTokenAmount}
              placeholder="Amount in"
              disabled={address ? false : true}
              onChange={onChangeAmountInput}
            />
            <div className="bg-gray-300 rounded-r-lg flex">
              <Button className="text-xs leading-relaxed" onClick={onClickFromToken}>
                {FromTokenBalance?.symbol}
              </Button>
            </div>
          </div>
          <p className="text-xs ml-1.5 mt-1">Balance: {FromTokenBalance?.formatted}</p>
          <p className="text-xs ml-1.5 mt-1 text-red-500" hidden={!isExceedBalance}>
            The amount entered exceeds the available balance.
          </p>
        </div>

        <div>
          <div className="flex">
            <TextField
              className="flex-1"
              type="text"
              value={toToken}
              placeholder="To Token Address"
              disabled={address ? false : true}
              hidden={!showToTokenInput}
              onChange={(event) => onChangeToToken(event.target.value)}
            />
          </div>
          <p className="text-xs ml-1.5 mt-1 text-red-500" hidden={!showToTokenInput || !isInvalidToToken}>
            To Token is Invalid.
          </p>
        </div>

        <div>
          <div className="flex">
            <TextField
              className="flex-1"
              type="text"
              placeholder="Amount out"
              disabled
              value={quote === 0 ? '' : quote}
            />
            <div className="bg-gray-300 rounded-r-lg flex">
              <Button className="text-xs leading-relaxed" onClick={onClickToToken}>
                {ToTokenBalance?.symbol}
              </Button>
            </div>
          </div>
          <p className="text-xs ml-1.5 mt-1">Balance: {ToTokenBalance?.formatted}</p>
        </div>

        <Button
          disabled={address && !isLoading ? false : true}
          onClick={onClickSwapButton}
          variant="outlined"
          size="large"
        >
          Swap
        </Button>
      </div>
    </>
  );
};

export default SwapCard;
