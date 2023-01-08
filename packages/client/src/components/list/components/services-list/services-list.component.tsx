import React from 'react'
import { Chip, Stack } from '@mui/material'
import { ServicesEnum } from '@cloudpay/types'

interface IServicesListProps {
  services: ServicesEnum[]
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
