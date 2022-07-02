import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import useCurrencyFormatter from "../../../Hooks/useCurrencyFormatter";
import { SubmitHandler, useForm } from 'react-hook-form';
import { ExpenseItem, FormValues } from './AmountInterface';
import { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../Hooks/reduxHooks';
import { addExpense } from '../../../service/expenseList';

const ExpenseFormService = () => {
    const currencyList = ['EGP', 'USD', 'EUR', 'KWD'],
    [amount, setFormat] = useCurrencyFormatter(),
    [title, setTitle] = useState(''),
    [date, setDate] = useState('');

    let actionPayload: ExpenseItem;
    const dispatch = useAppDispatch();

    const schema = yup.object({
      title: yup.string().required(),
      amount: yup.number().positive().required(),
      date: yup.string().required()
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
      setTitle(data.title);
      setDate(data.date);
    };

    useEffect(() => {
     if(title !== '') {
      actionPayload = {
        "id": Math.floor(Math.random() * 100),
        "title": title,
        "amount": amount,
        "date": date
      }
      dispatch(addExpense(actionPayload));
     }

      return () => {
        setTitle('');
        setDate('');
      };
      
    }, [title, date]);
  
  return {
    currencyList, 
    amount,
    register,
    handleSubmit,
    errors,
    onSubmit
  }
}

export default ExpenseFormService;