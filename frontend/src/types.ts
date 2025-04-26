// src/types.ts
export interface SolanaHookReturn {
  bSolPrice: number;
  tvl: number;
  apr: number;
  protocols: Protocol[];
}

export interface Protocol {
  name: string;
  apy: number;
  tvl: number;
  platform: string;
}