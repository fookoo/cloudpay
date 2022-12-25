import { ConditionEnum, Entry, IFilter } from '@cloudpay/types'
import React from 'react'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid'

import {
  Container,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField
} from '@mui/material'
import { Logo } from './components/logo/logo.component'
import { ServicesList } from './components/services-list/services-list.component'

const columns: GridColDef[] = [
  {
    field: 'logo',
    headerName: '',
    width: 100,
    filterable: false,
    renderCell: (props) => <Logo src={props.value} title={props.row.name} />
  },
  { field: 'name', headerName: 'Company name', width: 300 },
  { field: 'country', headerName: 'Country', width: 100 },
  {
    field: 'services',
    headerName: 'Services',
    width: 500,
    renderEditCell: (props) => <div>dupa</div>,
    renderHeader: (props) => <div>dupa</div>,

    renderCell: (props) => <ServicesList services={props.value} />
  }
]

interface IListProps {
  items: Entry[]

  onFilter?: (filters: IFilter[]) => void
}

export const List: React.VFC<IListProps> = ({ items, onFilter }) => {
  const handleNameFilter = (value: React.ChangeEvent<HTMLInputElement>) => {
    onFilter?.([
      {
        field: 'name',
        condition: ConditionEnum.Include,
        value: value.target.value
      }
    ])
  }

  return (
    <Paper sx={{ height: '100%' }}>
      <DataGrid sx={{ width: '100%' }} rows={items} columns={columns} pageSize={25} />
    </Paper>
  )

  // return (
  //   <TableContainer component={Paper}>
  //     <Table sx={{ minWidth: 650 }} aria-label="simple table">
  //       <TableHead>
  //         <TableRow>
  //           <TableCell></TableCell>
  //           <TableCell>
  //             <TextField placeholder="Name" onChange={handleNameFilter} />
  //           </TableCell>
  //           <TableCell>Country</TableCell>
  //           <TableCell>Services</TableCell>
  //         </TableRow>
  //       </TableHead>
  //       <TableBody>
  //         {items.map(({ id, logo, name, country, services }) => (
  //           <TableRow key={id}>
  //             <TableCell>
  //               <Logo src={logo} title={name} />
  //             </TableCell>
  //             <TableCell>{name}</TableCell>
  //             <TableCell>{country}</TableCell>
  //             <TableCell>
  //               <ServicesList services={services} />
  //             </TableCell>
  //           </TableRow>
  //         ))}
  //       </TableBody>
  //     </Table>
  //   </TableContainer>
  // )
}
