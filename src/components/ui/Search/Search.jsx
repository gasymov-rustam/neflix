import { memo } from 'react';
import cls from './Search.module.scss';

export const Search = memo(() => {
  return (
    <div className={cls.search}>
      <div>
        <i className='bx bx-search-alt'></i>
        <input type='text' placeholder='I`m searching for...' />
      </div>

      <i className='bx bx-customize'></i>
    </div>
  );
});
