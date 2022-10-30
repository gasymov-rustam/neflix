import { memo, useCallback } from 'react';
import { Button } from '../../ui';
import cls from './Information.module.scss';

export const Information = memo(({ movie }) => {
  const addToFavorites = useCallback((movieName) => {
    let favorites = localStorage.getItem('favMovies');

    if (favorites) {
      favorites = JSON.parse(favorites);
      localStorage.setItem('favMovies', [...favorites, movieName]);
      alert(`${movieName} now in favorites!`);
    }
  }, []);

  return (
    <div className={cls.info}>
      <img src={movie.logo} alt={movie.name} width='200' style={{ opacity: 0.7 }} />

      <div className={cls.additional}>
        <span>{movie.year}</span>
        <span>{movie.limitAge}</span>
        <span>{movie.rating}</span>
        <span>{movie.duration}</span>
      </div>

      <div className={cls.description}>{movie.description}</div>

      <div className={cls.buttons}>
        <Button cb={() => console.log('video is open')}>
          <i className='bx bx-play' style={{ color: '#c62e21' }}></i>
          <span>Play</span>
        </Button>

        <Button cb={addToFavorites}>
          <i className='bx bx-plus'></i>
          <span>My list</span>
        </Button>
      </div>
    </div>
  );
});
