import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Box } from '@mui/material';

interface ValidatorRow {
  id: number;
  name: string;
  commission: number;
  status: string;
}

const columns: GridColDef[] = [
  { 
    field: 'name', 
    headerName: 'Validator', 
    width: 200 
  },
  { 
    field: 'commission', 
    headerName: 'Fee %',
    type: 'number'
  },
  { 
    field: 'status', 
    headerName: 'Status',
    renderCell: (params) => (
      <Box 
        sx={{
          backgroundColor: params.value === 'Active' ? '#4caf50' : '#ff9800',
          color: 'white',
          padding: '0.25rem 0.5rem',
          borderRadius: '4px',
          fontSize: '0.75rem'
        }}
      >
        {params.value}
      </Box>
    )
  }
];

const rows: ValidatorRow[] = [
  { id: 1, name: 'Lido', commission: 5, status: 'Active' },
  { id: 2, name: 'Figment', commission: 7, status: 'Warning' },
  { id: 3, name: 'Chorus One', commission: 10, status: 'Active' }
];

export default function ValidatorTable() {
  return (
    <Box sx={{ 
      height: 400, 
      width: '100%',
      marginTop: '2rem',
      '& .MuiDataGrid-root': {
        border: 'none'
      }
    }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[5, 10]}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 }
          }
        }}
      />
    </Box>
  );
}