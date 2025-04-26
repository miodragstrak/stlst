import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

interface MetricCardProps {
  title: string;
  value: string | number;
  subtext?: string;
}

export default function MetricCard({ title, value, subtext }: MetricCardProps) {
  return (
    <Card variant="outlined" sx={{ minWidth: 120 }}>
      <CardContent>
        <Typography color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5" component="div">
          {value}
        </Typography>
        {subtext && (
          <Typography variant="caption" color="text.secondary">
            {subtext}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
}