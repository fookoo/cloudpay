import React, { useEffect, useState } from 'react'
import { Entry, IFilter } from '@cloudpay/types'
import { CompaniesService } from '../../services/companies/companies.service'
import { List } from '../list/list.component'
import { Box } from '@mui/material'
import { useDebounce } from '../../hooks/useDebounce/useDebounce.hook'

const App: React.VFC = () => {
  const [companies, setCompanies] = useState<Entry[]>([])
  const [filters, setFilters] = useState<IFilter[]>([])
  const debouncedFilter = useDebounce(filters)

  const update = (filters: IFilter[] = []) => {
    CompaniesService.getCompanies(filters).then(setCompanies)
  }

  useEffect(() => {
    update(debouncedFilter)
  }, [debouncedFilter])

  return (
    <Box sx={{ flexGrow: 1, height: '100%' }}>
      <List items={companies} onFilter={setFilters} />
    </Box>
  )
}

export default App
