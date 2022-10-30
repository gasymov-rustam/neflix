import { memo } from 'react';
import cls from './Profile.module.scss';

export const Profile = memo(() => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.profile}>
        <div className={cls.notification}>
          <i className='bx bxs-bell'></i>
          <span></span>
        </div>

        <div>
          <img
            src='https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/06/28/14/avatar.jpg?width=50'
            alt='error'
            width={50}
            height={50}
            decoding='async'
            loading='lazy'
            className='img'
          />
        </div>

        <i className='bx bx-caret-down'></i>
      </div>
    </div>
  );
});
