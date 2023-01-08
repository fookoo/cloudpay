export enum ServicesEnum {
  Payroll = 'Payroll',
  Treasury = 'Treasury',
  Implementation = 'Implementation',
  BankPayments = 'Bank Payments'
}

export interface Entry {
  id: string
  name: string
  logo?: string
  services: ServicesEnum[]
  country: string
}
