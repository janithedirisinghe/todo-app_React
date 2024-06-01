import React from 'react';

interface Activity {
  id: number;
  text: string;
  date: string;
}

const activities: Activity[] = [
  { id: 1, text: "Kushantha Charuka created Contract #00124 need John Beige's signature", date: 'Sep 16, 2022 at 11:30 AM' },
  { id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium neque', date: 'Sep 16, 2022 at 11:45 AM' },
  { id: 3, text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pretium neque', date: 'Sep 16, 2022 at 11:45 AM' },
  // Add more activities as necessary
];

const ActivityFeed: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-semibold mb-4">Activity Feed</h3>
      <ul>
        {activities.map(activity => (
          <li key={activity.id} className="mb-4">
            <p>{activity.text}</p>
            <span className="text-sm text-gray-600">{activity.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ActivityFeed;
