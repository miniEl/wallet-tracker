import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import useCurrencyFormatter from "../../../Hooks/useCurrencyFormatter";
import { FormValues } from './AmountInterface';

const SubmitForm = () => {
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
    console.log(data);
    setFormat(data.currency, data.amount);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register('currency')}>
            {
              currencyList.map((item) => (
                <option key={item} value={item}>{item}</option>
              ))
            }
          </select>
          <input placeholder='Amount' {...register('amount')}></input>
        <p>{errors.amount?.message}</p>

        <button type='submit'>Submit</button>
      </form>
      <div>{amount}</div>
    </div>
  );
}

export default SubmitForm;