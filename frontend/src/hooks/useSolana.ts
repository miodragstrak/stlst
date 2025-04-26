import { useState, useEffect } from 'react';
import { Connection, PublicKey } from '@solana/web3.js';

interface Protocol {
    name: string;
    apy: number;
    tvl: number;
    platform: string;
  }

export default function useSolana() {
  const [bSolPrice, setBSolPrice] = useState(1.02);
  const [tvl, setTvl] = useState(0);
  const [apr, setApr] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const connection = new Connection("REACT_APP_SOLANA_RPC");
        const bSolMint = new PublicKey("REACT_APP_SOLBLAZE_API");
        
        const supply = await connection.getTokenSupply(bSolMint);
        setTvl(Number(supply.value.amount) / 1e9);
        
        // Temporary mock data - replace with real API call
        setProtocols([
            {
              name: 'SolBlaze',
              apy: 6.8,
              tvl: 250000,
              platform: 'Native'
            },
            {
              name: 'Orca',
              apy: 8.2,
              tvl: 180000,
              platform: 'Whirlpool'
            }
          ]);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  

    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  return { bSolPrice, tvl, apr, protocols };
}