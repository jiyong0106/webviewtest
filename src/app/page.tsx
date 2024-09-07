import styles from './page.module.scss';
import classNames from 'classnames/bind';
import Link from 'next/link';

const cn = classNames.bind(styles);
export default function Home() {
  return (
    <div className={cn('container')}>
      <h1>Welcome Web</h1>
      <span>
        <Link href={`/login`}>🔗login ?</Link>
      </span>
    </div>
  );
}
