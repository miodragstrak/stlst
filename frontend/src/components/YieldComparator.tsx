// If using separate types:
import { Card, CardContent, Typography, Grid, CircularProgress } from '@mui/material';
import { Bar } from 'react-chartjs-2';
import { Protocol } from '../types'; // Assuming you've defined the interface
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
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

export default function YieldComparator() {
  const { protocols } = useSolana();

  const chartData = {
    labels: protocols.map(p => p.name),
    datasets: [{
      label: 'APY %',
      data: protocols.map(p => p.apy),
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
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Bar 
                data={chartData}
                options={{
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
                        text: 'Annual Percentage Yield'
                      }
                    }
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Your protocol details component */}
            </Grid>
          </Grid>
        ) : (
          <CircularProgress />
        )}
      </CardContent>
    </Card>
  );
}