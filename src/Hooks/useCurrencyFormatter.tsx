import { useState } from "react";

const useCurrencyFormatter = () => {
  const [amount, setAmount] = useState('');

  const setFormat:any = (currency?: any, value?: any) => {
    const currencyFormatter = new Intl.NumberFormat(undefined, {
      currency: currency,
      style: "currency",
      minimumFractionDigits: 0,
    });
    
    setAmount(currencyFormatter.format(value)); 
  }
  return [amount, setFormat];
}

export default useCurrencyFormatter;