import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

// Register necessary chart.js components
Chart.register(ArcElement);

const TaskPriorities: React.FC = () => {
  const [priorityCounts, setPriorityCounts] = useState<{ [key: string]: number }>({
    HIGH: 0,
    MEDIUM: 0,
    LOW: 0
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPriorities = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do');
        if (!response.ok) {
          throw new Error('Failed to fetch priorities');
        }
        const data = await response.json();
        const counts = data.reduce((acc: { [key: string]: number }, task: { priority: string }) => {
          acc[task.priority] = (acc[task.priority] || 0) + 1;
          return acc;
        }, {});
        setPriorityCounts(counts);
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPriorities();
  }, []);

  const data = {
    labels: ['High', 'Medium', 'Low'],
    datasets: [{
      label: 'Task Priorities',
      data: [priorityCounts.HIGH, priorityCounts.MEDIUM, priorityCounts.LOW],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-white rounded shadow ">
      <h3 className="text-xl font-semibold mb-4 border-b p-6 pb-3">Task Priorities</h3>
      <div className="grid grid-cols-2 gap-8 p-6">
        <div>
          <div className='w-48'>
            <Doughnut data={data} />
          </div>
        </div>
        <div className='p-6'>
          <div className="flex items-center mb-1">
            <div className="w-4 h-4 bg-red-500 rounded-full mr-2"></div> High
          </div>
          <div className="flex items-center mb-1">
            <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div> Medium
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div> Low
          </div>
        </div>
      </div>
    </div>
  );
}

export default TaskPriorities;
