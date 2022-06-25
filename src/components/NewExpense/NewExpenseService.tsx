import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import useCurrencyFormatter from "../../Hooks/useCurrencyFormatter";
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormValues } from './AddExpense/AmountInterface';

const NewExpenseService = () => {
    const currencyList = ['EGP', 'USD', 'EUR', 'KWD'],
    [amount, setFormat] = useCurrencyFormatter();

    const schema = yup.object({
      amount: yup.number().positive().required()
    }).required();

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormValues>({
      resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
      setFormat(data.currency, data.amount);
    };

  return {
    currencyList, 
    amount,
    register,
    handleSubmit,
    errors,
    onSubmit
  }
}

export default NewExpenseService;