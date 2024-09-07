'use client';
import styles from './listpage.module.scss';
import classNames from 'classnames/bind';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const cn = classNames.bind(styles);

const ListPage = () => {
  const router = useRouter();
  const back = () => {
    router.back();
  };
  return (
    <div className={cn('container')}>
      <span className={cn('back')} onClick={back}>
        back
      </span>
      <div>
        <h1>Cute</h1>
      </div>
      <div className={cn('imageWraper')}>
        <Image src="/images/1.jpg" width={80} height={80} alt="dogImage" />
        <Image src="/images/2.jpg" width={80} height={80} alt="dogImage" />
        <Image src="/images/3.jpg" width={80} height={80} alt="dogImage" />
        <Image src="/images/4.jpg" width={80} height={80} alt="dogImage" />
        <Image src="/images/5.jpg" width={80} height={80} alt="dogImage" />
        <Image src="/images/6.jpg" width={80} height={80} alt="dogImage" />
        <Image src="/images/7.jpg" width={80} height={80} alt="dogImage" />
        <Image src="/images/8.jpg" width={80} height={80} alt="dogImage" />
        <Image src="/images/9.jpg" width={80} height={80} alt="dogImage" />
        <Image src="/images/10.jpg" width={80} height={80} alt="dogImage" />
        <Image src="/images/11.jpg" width={80} height={80} alt="dogImage" />
        <Image src="/images/12.jpg" width={80} height={80} alt="dogImage" />
        <Image src="/images/13.jpg" width={80} height={80} alt="dogImage" />
        <Image src="/images/14.jpg" width={80} height={80} alt="dogImage" />
        <Image src="/images/15.jpg" width={80} height={80} alt="dogImage" />
      </div>
    </div>
  );
};

export default ListPage;
