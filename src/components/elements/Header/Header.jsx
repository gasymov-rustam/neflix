import { memo } from 'react';
import { Search } from '../../ui';
import { Profile } from '../Profile';
import cls from './Header.module.scss';

export const Header = memo(() => {
  return (
    <div className={cls.header}>
      <div>
        <a href='/'>
          <img
            src='https://www.freepnglogos.com/uploads/netflix-logo-0.png'
            alt='Netflix'
            height='35'
            width='112'
            decoding='async'
            loading='lazy'
            className='img'
          />
        </a>

        <Search />
      </div>

      <Profile />
    </div>
  );
});
