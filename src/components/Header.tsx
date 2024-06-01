import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <div className="bg-white p-4 flex justify-between items-center shadow">
      <h1 className="text-xl font-semibold">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <FaBell className="text-gray-600" />
        <FaUserCircle className="text-gray-600" />
      </div>
    </div>
  );
}

export default Header;