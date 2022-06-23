export enum CurrencyEnum {
  EGP = 'EGP',
  USD = 'USD',
  EUR = 'EUR',
  KWD = 'KWD',
}

export type FormValues = {
  currency: CurrencyEnum;
  amount: number;
}