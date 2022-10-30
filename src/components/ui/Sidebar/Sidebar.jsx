import { memo } from 'react';
import cls from './Sidebar.module.scss';

const menu = ['Popular', 'TV Shows', 'Films', 'My list'];

export const Sidebar = memo((props) => {
  const { isSidebarShow, setIsSidebarShow } = props;

  return (
    <div className={cls.sidebar} style={{ width: isSidebarShow ? '15%' : '10%' }}>
      <button onClick={() => setIsSidebarShow((prev) => !prev)}>
        <i className={`bx bx-${isSidebarShow ? 'x' : 'border-left'}`}></i>
      </button>

      <ul className={isSidebarShow ? cls.show : ''}>
        {menu.map((title) => (
          <li key={title}>
            <a href={title}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
});
