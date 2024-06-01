import React from 'react';
import { FaRegEnvelope } from 'react-icons/fa'; 

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-purple-950 text-white flex flex-col">
      <div className="text-center p-1 text-2xl font-semibold bg-purple-900 mb-4">Acmy Solutions</div>
      <div className="flex-grow">
        <ul>
          <li className="p-4 hover:bg-purple-900 hover:rounded-3xl cursor-pointer flex items-center mb-2">
            <FaRegEnvelope className="mr-4" />
            Dashboard
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
