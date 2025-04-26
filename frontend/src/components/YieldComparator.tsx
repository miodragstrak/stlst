import { Card, CardContent, Typography, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Bar } from 'react-chartjs-2';
import { Protocol } from '../types';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions
} from 'chart.js';
import useSolana from '../hooks/useSolana';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Define chart options separately for better readability
const chartOptions: ChartOptions<'bar'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'APY Comparison',
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Annual Percentage Yield (%)'
      }
    }
  }
};

// ProtocolDetails component (if not already defined)
const ProtocolDetails = ({ protocols }: { protocols: Protocol[] }) => (
  <div>
    {protocols.map((protocol) => (
      <div key={protocol.name} style={{ marginBottom: '1rem' }}>
        <Typography variant="h6">{protocol.name}</Typography>
        <Typography>APY: <strong>{protocol.apy}%</strong></Typography>
        <Typography>TVL: {protocol.tvl.toLocaleString()} SOL</Typography>
        <Typography>Platform: {protocol.platform}</Typography>
      </div>
    ))}
  </div>
);

export default function YieldComparator() {
  const { protocols } = useSolana();

  const chartData = {
    labels: protocols.map((p: Protocol) => p.name),
    datasets: [{
      label: 'APY %',
      data: protocols.map((p: Protocol) => p.apy),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      borderColor: 'rgba(53, 162, 235, 1)',
      borderWidth: 1
    }]
  };

  return (
    
    <Card sx={{ mt: 4 }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          bSOL Yield Comparison
        </Typography>
        
        {protocols.length > 0 ? (
            <Grid container spacing={3} sx={{ width: '100%' }}>
                <Grid item xs={12} md={6}>
                    <Bar 
                    data={chartData}
                    options={chartOptions}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <ProtocolDetails protocols={protocols} />
                </Grid>
            </Grid>
        ) : (
          <CircularProgress />
        )}
      </CardContent>
    </Card>
  );
}