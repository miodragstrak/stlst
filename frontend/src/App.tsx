import { Box, CssBaseline } from '@mui/material';
import { BSolMetrics, ValidatorTable, YieldComparator } from './components';

function App() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <BSolMetrics />
        <ValidatorTable />
        <YieldComparator />
      </Box>
    </Box>
  );
}