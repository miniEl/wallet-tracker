const useCurrency = (currency: string, amount: number) => {

  const currencyFormatter = new Intl.NumberFormat(undefined, {
    currency: currency,
    style: "currency",
    minimumFractionDigits: 0,
  });

  const cost = currencyFormatter.format(amount);

  return cost;
}

export default useCurrency;