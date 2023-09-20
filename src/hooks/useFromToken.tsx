import { ethers } from 'ethers';
import { useContract, useSigner } from 'wagmi';

import GeneralArtifact from '../utils/abis/GeneralArtifact.json';

const WETH_ADDRESS = '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6';
const WETH_DECIMALS = 18;

const useFromToken = () => {
  const { data: signer } = useSigner();
  const FromTokenContract = useContract({
    address: WETH_ADDRESS,
    abi: GeneralArtifact.abi,
    signerOrProvider: signer
  });

  const deposit = async (amount: number) => {
    if (!FromTokenContract) throw new Error('WETH contract has not been initialized');

    const parsedAmount = ethers.utils.parseUnits(amount.toString(), WETH_DECIMALS);

    const txn = await FromTokenContract.deposit({ value: parsedAmount });
    return txn;
  };

  const approve = async (address: string, amount: number) => {
    if (!FromTokenContract) throw new Error('WETH contract has not been initialized');

    const parsedAmount = ethers.utils.parseUnits(amount.toString(), WETH_DECIMALS);

    const txn = FromTokenContract.approve(address, parsedAmount);
    return txn;
  };

  return { deposit, approve };
};

export default useFromToken;
