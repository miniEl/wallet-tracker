export enum CurrencyEnum {
  EGP = 'EGP',
  USD = 'USD',
  EUR = 'EUR',
  KWD = 'KWD',
}

export type FormValues = {
  title: string;
  amount: number;
  currency: CurrencyEnum;
  date: string;
}

export type ExpenseItem = {
  id: number;
  title: string;
  amount: number;
  date: string;
}