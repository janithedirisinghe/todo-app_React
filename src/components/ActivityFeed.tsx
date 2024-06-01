import React from 'react';
import { ReactComponent as Avatar1 } from '../images/Avatar-2.svg';

const ActivityFeed: React.FC = () => {
  return (
    <div className="bg-white rounded shadow border">
      <h3 className="text-xl font-semibold mb-4 border-b p-6">Activity Feed</h3>
      <div className="grid grid-cols-11 gap-4 border-b">
        <div className="col-span-1 ml-5 mt-9">
          <Avatar1/>
        </div>
        <div className="col-span-10">
          <ul>
            <li className="mb-4 p-6 m-3">
              <p>Kushantha Charuka created Contract #00124 need John Beige's signature</p>
              <span className="text-sm text-gray-600">Sep 16, 2022 at 11:45 AM</span>
            </li>
          </ul>
        </div>
      </div>


      <div className="grid grid-cols-11 gap-4 border-b">
        <div className="col-span-1 ml-5 mt-9">
          <Avatar1/>
        </div>
        <div className="col-span-10">
          <ul>
            <li className="mb-4 border-b p-6 m-3">
              <p>Kushantha Charuka created Contract #00124 need John Beige's signature</p>
              <span className="text-sm text-gray-600">Sep 16, 2022 at 11:45 AM</span>
            </li>
          </ul>
        </div>
      </div>



      <div className="grid grid-cols-11 gap-4 border-b">
        <div className="col-span-1 ml-5 mt-9">
          <Avatar1/>
        </div>
        <div className="col-span-10">
          <ul>
            <li className="mb-4 border-b p-6 m-3">
              <p>Kushantha Charuka created Contract #00124 need John Beige's signature</p>
              <span className="text-sm text-gray-600">Sep 16, 2022 at 11:45 AM</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ActivityFeed;
