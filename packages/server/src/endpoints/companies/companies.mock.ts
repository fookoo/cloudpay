import { Entry, ServicesEnum } from '@cloudpay/types'

export const entries: Entry[] = [
  {
    id: 'id-1',
    logo: 'https://fakeimg.pl/100x40',
    name: 'Centen Information Systems',
    country: 'Germany',
    services: [ServicesEnum.Payroll, ServicesEnum.Treasury, ServicesEnum.Implementation, ServicesEnum.BankPayments]
  },
  {
    id: 'id-2',
    logo: 'https://fakeimg.pl/100x40',
    name: 'Centric Software Technology',
    country: 'Russia',
    services: []
  },
  {
    id: 'id-3',
    logo: 'https://fakeimg.pl/100x40',
    name: 'Charli Solutions (P) Limited',
    country: 'Haiti',
    services: [ServicesEnum.Treasury, ServicesEnum.BankPayments]
  },
  {
    id: 'id-4',
    logo: 'https://fakeimg.pl/100x40',
    name: 'Cherubs Software Solutions',
    country: 'Spain',
    services: [ServicesEnum.Payroll, ServicesEnum.Treasury, ServicesEnum.BankPayments]
  },
  {
    id: 'id-5',
    logo: 'https://fakeimg.pl/100x40',
    name: 'CK Technologies',
    country: 'Poland',
    services: [ServicesEnum.Payroll, ServicesEnum.Treasury, ServicesEnum.Implementation, ServicesEnum.BankPayments]
  },
  {
    id: 'id-6',
    name: 'Clara Technologies',
    logo: 'https://fakeimg.pl/100x40',
    country: 'Sweden',
    services: [ServicesEnum.Payroll, ServicesEnum.BankPayments]
  },
  {
    id: 'id-7',
    name: 'Complete Object Solutions',
    logo: 'https://fakeimg.pl/100x40',
    country: 'Georgia',
    services: [ServicesEnum.Treasury, ServicesEnum.Implementation]
  },
  {
    id: 'id-8',
    name: 'Convex Technologies',
    logo: 'https://fakeimg.pl/100x40',
    country: 'Macedonia',
    services: [ServicesEnum.Payroll, ServicesEnum.Treasury, ServicesEnum.BankPayments]
  },
  {
    id: 'id-9',
    name: 'Copious IT Services',
    logo: 'https://fakeimg.pl/100x40',
    country: 'France',
    services: [ServicesEnum.Implementation, ServicesEnum.BankPayments]
  },
  {
    id: 'id-10',
    name: 'Digitech Solution',
    logo: 'https://fakeimg.pl/100x40',
    country: 'France',
    services: [ServicesEnum.Payroll, ServicesEnum.Treasury, ServicesEnum.Implementation, ServicesEnum.BankPayments]
  }
]
