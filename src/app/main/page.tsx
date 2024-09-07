'use client';
import styles from './mainpage.module.scss';
import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';

const cn = classNames.bind(styles);

const MainPage = () => {
  const router = useRouter();
  return (
    <div className={cn('container')}>
      <span className={cn('logout')} onClick={() => router.push(`/login`)}>
        Logout
      </span>
      <h1>Main Page</h1>
      <span onClick={() => router.push(`/list`)}>
        🤫 Do you want to see dog ?
      </span>
      <span onClick={() => router.push(`/movie`)}>🔗 Movie Links</span>
    </div>
  );
};

export default MainPage;
