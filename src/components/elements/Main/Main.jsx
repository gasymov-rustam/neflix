import { memo, useCallback, useState } from 'react';
import { DATA } from '../../../data';
import { BottomNavigation, Sidebar } from '../../ui';
import cls from './Main.module.scss';

export const Main = memo(() => {
  const [isSidebarShow, setIsSidebarShow] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const handleShowSidebar = useCallback((isShow) => {
    setIsSidebarShow(isShow);
  }, []);

  return (
    <div className={cls.wrapper}>
      <Sidebar isSidebarShow={isSidebarShow} setIsSidebarShow={handleShowSidebar} />
      <div
        className={cls.main}
        style={{
          backgroundImage: `url(${DATA[0].mainImage})`,
          width: isSidebarShow ? '85%' : '90%',
        }}
      >
        {/* {activeTab === 1 ? <Information movie={DATA[0]} /> : activeTab === 2 && <Episodes />} */}
      </div>
      <BottomNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
});
