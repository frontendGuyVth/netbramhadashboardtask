export interface User {
  name: string;
  score: number;
  date: string;
}

export interface Accounts {
  total: number;
  closedCards: number;
  closedLoans: number;
  openCards: number;
  openLoans: number;
}

export interface History {
  date: string;
  score: number;
}

export interface DashboardData {
  user: User;
  accounts: Accounts;
  disputes: number;
  enquiries: number;
  history: History[];
}
