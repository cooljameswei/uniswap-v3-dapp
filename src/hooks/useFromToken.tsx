import { ethers } from 'ethers';
import { useContract, useSigner } from 'wagmi';

import GeneralArtifact from '../utils/abis/GeneralArtifact.json';

const DECIMALS = 18;

const useFromToken = (fromTokenAddress: string) => {
  const { data: signer } = useSigner();
  const FromTokenContract = useContract({
    address: fromTokenAddress,
    abi: GeneralArtifact.abi,
    signerOrProvider: signer
  });

  const approve = async (address: string, amount: number) => {
    if (!FromTokenContract) throw new Error('From token contract has not been initialized');

    const parsedAmount = ethers.utils.parseUnits(amount.toString(), DECIMALS);

    const txn = FromTokenContract.approve(address, parsedAmount);
    return txn;
  };

  return { approve };
};

export default useFromToken;
