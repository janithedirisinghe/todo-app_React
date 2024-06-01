import React from 'react';
import { ReactComponent as NotificationSvg } from '../images/Notifications.svg';
import { ReactComponent as ProfileSvg } from '../images/Profile.svg';
import { ReactComponent as Downcon } from '../images/Chevron-down.svg';

const Header: React.FC = () => {
  return (
    <div className="bg-white p-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <div onClick={() => window.location.href = '#'}>
        <NotificationSvg/>
        </div>
        <div onClick={() => window.location.href = '#'}>
        <ProfileSvg/>
        </div>
        <div onClick={() => window.location.href = '#'}>
          <Downcon/>
        </div>
      </div>
    </div>
  );
}

export default Header;