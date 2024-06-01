import React from 'react';

interface Task {
  id: number;
  name: string;
  status: 'Done' | 'In-Progress';
  date: string;
}

const tasks: Task[] = [
  { id: 1, name: "Contract #00124 need John Beige's signature", status: 'Done', date: 'Sep 16' },
  { id: 2, name: "Franklin More's professional review is pending", status: 'Done', date: 'Sep 12' },
  { id: 3, name: 'Internship Agreement template is not completed', status: 'Done', date: 'Sep 10' },
  // Add more tasks as necessary
];

const Tasks: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="text-xl font-semibold mb-4">Tasks</h3>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="flex justify-between items-center mb-4">
            <div>
              <h4>{task.name}</h4>
              <p className="text-sm text-gray-600">Mark as done</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className={`px-2 py-1 rounded text-white ${task.status === 'Done' ? 'bg-green-500' : 'bg-yellow-500'}`}>{task.status}</span>
              <span className="text-sm text-gray-600">{task.date}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-4">
        <button className="px-4 py-2 bg-purple-600 text-white rounded">Previous</button>
        <div>1</div>
        <button className="px-4 py-2 bg-purple-600 text-white rounded">Next</button>
      </div>
    </div>
  );
}

export default Tasks;
