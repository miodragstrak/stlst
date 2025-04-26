import { Card, CardContent, Typography } from '@mui/material';
import useSolana from '../hooks/useSolana';
import MetricCard from './MetricCard';

export default function BSolMetrics() {
  const { bSolPrice, tvl, apr } = useSolana();

  return (
    <Card>
      <CardContent>
        <Typography variant="h5">bSOL Analytics</Typography>
        <div className="metrics-grid">
          <MetricCard title="bSOL/SOL" value={bSolPrice} />
          <MetricCard title="TVL" value={`${tvl} SOL`} />
          <MetricCard title="APR" value={`${apr}%`} />
        </div>
      </CardContent>
    </Card>
  );
}