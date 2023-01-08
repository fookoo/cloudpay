import { ConditionEnum, Entry, IFilter, ServicesEnum } from '@cloudpay/types'
import React, { useCallback, useEffect, useState } from 'react'

import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { Logo } from './components/logo/logo.component'
import { ServicesList } from './components/services-list/services-list.component'
import { HeaderEditLabel } from './components/header-edit-label/header-edit-label.component'
import { HeaderEditServices } from './components/header-edit-services/header-edit-services.component'

interface IListProps {
  items: Entry[]
  filters: IFilter[]
  onFilter?: (filters: IFilter[]) => void
}

export const List: React.FC<IListProps> = ({ items, filters, onFilter }) => {
  const [nameFilter, setNameFilter] = useState('')
  const [servicesFilter, setServicesFilter] = useState<ServicesEnum[]>([])

  const handleClearName = useCallback(() => {
    setNameFilter('')
  }, [])

  useEffect(() => {
    const filters = []

    if (nameFilter) {
      filters.push({
        field: 'name',
        condition: ConditionEnum.Include,
        value: nameFilter
      })
    }

    if (servicesFilter.length > 0) {
      filters.push({
        field: 'services',
        condition: ConditionEnum.Include,
        value: servicesFilter
      })
    }
    onFilter?.(filters)
  }, [nameFilter, servicesFilter, onFilter])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>
              <HeaderEditLabel label="Name" value={nameFilter} onChange={setNameFilter} onClear={handleClearName} />
            </TableCell>
            <TableCell>Country</TableCell>
            <TableCell>
              <HeaderEditServices label="Services" value={servicesFilter} onChange={setServicesFilter} />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(({ id, logo, name, country, services }) => (
            <TableRow key={id}>
              <TableCell>
                <Logo src={logo} title={name} />
              </TableCell>
              <TableCell>{name}</TableCell>
              <TableCell>{country}</TableCell>
              <TableCell>
                <ServicesList services={services} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
