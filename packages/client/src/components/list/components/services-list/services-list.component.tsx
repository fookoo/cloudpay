import React from 'react'
import { Chip, Stack } from '@mui/material'

interface IServicesListProps {
  services: string[]
}

export const ServicesList: React.VFC<IServicesListProps> = ({ services = [] }) => {
  return (
    <Stack direction="row" spacing={1}>
      {services.map((service) => (
        <Chip key={service} label={service} />
      ))}
    </Stack>
  )
}
