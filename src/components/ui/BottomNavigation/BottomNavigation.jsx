import { memo } from 'react';
import cls from './BottomNavigation.module.scss';

const tabs = [
  {
    _id: 1,
    name: 'Overview',
  },
  {
    _id: 2,
    name: 'Episodes',
  },
  {
    _id: 3,
    name: 'Details',
  },
];

export const BottomNavigation = memo(({ activeTab, setActiveTab }) => (
  <nav className={cls.nav}>
    {tabs.map((tab) => (
      <button
        key={tab._id}
        onClick={() => setActiveTab(tab._id)}
        className={activeTab === tab._id ? cls.active : ''}
      >
        {tab.name}
      </button>
    ))}
  </nav>
));
