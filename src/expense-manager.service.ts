import companies from './company-store'
import cards from './card-store'
import employees from './employee-store'
import { Card, Company, Employee, Transaction } from './types'
import { transactions } from './transaction-store'

export class ExpenseManagerService {
  listCompanies(): Company[] {
    return companies
  }

  getCompany(id: string): Company {
    return companies.find((company) => company.id === id)
  }

  listEmployeesByCompany(companyId: string): Employee[] {
    return employees.filter((employee) => employee.companyId === companyId)
  }

  listCardsByEmployee(employeeId: string): Card[] {
    return cards.filter((card) => card.employeeId === employeeId)
  }

  listTransactionsByEmployee(employeeId: string): Transaction[] {
    const employeeCards = cards
      .filter((card) => card.employeeId === employeeId)
      .map((card) => card.id)
    return transactions.filter((transaction) =>
      employeeCards.includes(transaction.cardId)
    )
  }

  listCardsByCompany(companyId: string): Card[] {
    const companyEmployees = employees
      .filter((employee) => employee.companyId === companyId)
      .map((employee) => employee.id)
    return cards.filter((card) => companyEmployees.includes(card.employeeId))
  }

  listTransactionsByCompany(companyId: string): Transaction[] {
    return transactions.filter((t) => t.companyId === companyId)
  }

  listTransactionsByCard(cardId: string): Transaction[] {
    return transactions.filter((t) => t.cardId === cardId)
  }

  deactivateCardByCardId(cardId: string): Card {
    const card = cards.find((card) => card.id === cardId)
    card.active = false
    return card
  }

  deactivateCardByCardNumber(cardNumber: string): Card {
    const card = cards.find((card) => card.cardNumber === cardNumber)
    card.active = false
    return card
  }
}
