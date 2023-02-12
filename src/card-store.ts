import { Card } from './types'
import { faker } from '@faker-js/faker'

const cardStore: Card[] = [
  {
    id: 'CD10001',
    cardNumber: faker.finance.creditCardNumber(),
    employeeId: 'E100001',
    active: true,
  },
  {
    id: 'CD10002',
    cardNumber: faker.finance.creditCardNumber(),
    employeeId: 'E100002',
    active: true,
  },
  {
    id: 'CD10003',
    cardNumber: faker.finance.creditCardNumber(),
    employeeId: 'E100002',
    active: true,
  },
  {
    id: 'CD10004',
    cardNumber: faker.finance.creditCardNumber(),
    employeeId: 'E100003',
    active: true,
  },
  {
    id: 'CD10005',
    // cardNumber: faker.finance.creditCardNumber(),
    cardNumber: '1234567890',
    employeeId: 'E100003',
    active: true,
  },
]

export default cardStore