import React from 'react';
import { FaRegEnvelope } from 'react-icons/fa'; 

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-purple-900 text-white flex flex-col">
      <div className="text-center p-4 text-2xl font-semibold">Acmy Solutions</div>
      <div className="flex-grow">
        <ul>
          <li className="p-4 hover:bg-purple-700 cursor-pointer flex items-center">
            <FaRegEnvelope className="mr-4" />
            Dashboard
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;