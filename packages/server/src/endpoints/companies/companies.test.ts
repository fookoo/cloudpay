import { entries } from './companies.mock'
import { filterEntries } from './companies.endpoint'

describe('Companies - filtering', () => {
  it('should return full list without filters', () => {
    expect(filterEntries(entries).length).toBe(entries.length)
  })

  it('should return filtered list with name filter', () => {
    expect(filterEntries(entries, 'CK').length).toBe(1)
  })

  it('should return filtered list with services filter', () => {
    expect(filterEntries(entries, '', 'Payroll').length).toBe(6)
  })

  it('should return filtered list with name & service filter', () => {
    expect(filterEntries(entries, 'Dig', 'Payroll').length).toBe(1)
  })
})
