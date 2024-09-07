'use client';
import styles from './loginpage.module.scss';
import classNames from 'classnames/bind';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
const cn = classNames.bind(styles);

type datatype = {
  name: string;
  password: string;
};

const LoginPage = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<datatype>();
  const onSubmit = (data: datatype) => {
    if (data) {
      router.push(`/main`);
    }
  };
  return (
    <div className={cn('container')}>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('name', {
            required: 'Please enter your nickname',
          })}
        />
        {errors.name && <span>{errors.name.message as string}</span>}
        <input
          {...register('password', {
            required: 'Please enter your password',
          })}
        />
        {errors.password && <span>{errors.password.message as string}</span>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
