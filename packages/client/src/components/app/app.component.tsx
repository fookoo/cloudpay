import { Entry, IFilter } from '@cloudpay/types'
import { useEffect, useState } from 'react'
import { CompaniesService } from '../../services/companies/companies.service'
import { List } from '../list/list.component'
import { Box, Container, Grid } from '@mui/material'

const App: React.VFC = () => {
  const [companies, setCompanies] = useState<Entry[]>([])

  const update = (filters: IFilter[] = []) => {
    CompaniesService.getCompanies(filters).then(setCompanies)
  }

  useEffect(() => {
    update()
  }, [])

  return (
    <Box sx={{ flexGrow: 1, height: '100%' }}>
      <List items={companies} onFilter={update} />
    </Box>
  )
}

export default App
