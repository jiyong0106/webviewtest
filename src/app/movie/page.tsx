'use client';
import styles from './moviepage.module.scss';
import classNames from 'classnames/bind';
import { useRouter } from 'next/navigation';

const cn = classNames.bind(styles);

const MoviePage = () => {
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
        <h1>MoviePage</h1>
      </div>
      <div className={cn('movieList')}>
        <a href="https://www.naver.com" target="_black">
          <span>www.naver.com</span>
        </a>
        <a
          href="https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&mra=bkEw&pkid=68&os=34160535&qvt=0&query=%EC%95%88%EB%85%95%20%ED%95%A0%EB%B6%80%EC%A7%80"
          target="_black"
        >
          <span>안녕 할부지!</span>
        </a>
        <a
          href="https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&pkid=68&os=33799832&qvt=0&query=%EC%97%90%EC%9D%B4%EB%A6%AC%EC%96%B8%3A%20%EB%A1%9C%EB%AC%BC%EB%A3%A8%EC%8A%A4"
          target="_black"
        >
          <span>에에에이리언</span>
        </a>
        <a
          href="https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&pkid=68&os=26098746&qvt=0&query=%ED%8C%8C%EC%9D%BC%EB%9F%BF"
          target="_black"
        >
          <span>비행기조종사</span>
        </a>
        <a
          href="https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&pkid=68&os=29847563&qvt=0&query=%EB%B9%85%ED%86%A0%EB%A6%AC"
          target="_black"
        >
          <span>브이아이씨티오알와이</span>
        </a>
        <a
          href="https://search.naver.com/search.naver?where=nexearch&sm=tab_etc&pkid=68&os=33911089&qvt=0&query=%EC%82%AC%EB%9E%91%EC%9D%98%20%ED%95%98%EC%B8%84%ED%95%91"
          target="_black"
        >
          <span>시진핑</span>
        </a>
      </div>
    </div>
  );
};

export default MoviePage;
