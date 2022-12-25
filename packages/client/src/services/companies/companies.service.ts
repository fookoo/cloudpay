import { IFilter, Entry } from '@cloudpay/types'
import { API } from '../api.const'

export class CompaniesService {
  public static getCompanies(filters: IFilter[] = []): Promise<Entry[]> {
    const parsedFilter = CompaniesService.parseFilters(filters)

    return new Promise<Entry[]>((success) => {
      API.get<Entry[]>(`/companies${parsedFilter}`).then((response) => {
        success(response)
      })
    })
  }

  private static parseFilters(filters: IFilter[]): string {
    if (filters.length === 0) {
      return ''
    }

    return `?${filters.map(({ field, value }) => `${field}=${value}`).join('&')}`
  }
}
