import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Highsvg } from '../images/Priority-High.svg';
import { ReactComponent as Mediumsvg } from '../images/Priority-Medium.svg';
import { ReactComponent as Lowsvg } from '../images/Priority-Low.svg';

interface Task {
  id: string;
  name: string;
  priority: 'LOW' | 'MEDIUM' | 'HIGH';
  todo: string;
  completed: boolean;
  createdAt: string;
}

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const tasksPerPage = 9; // Number of tasks to display per page

  // Fetch tasks from API
  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch tasks');
        }
        const data = await response.json();
        setTasks(data);
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

    fetchTasks();
  }, []);

  // Logic to calculate the index of the first and last task for the current page
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  // Function to handle page change
  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected + 1);
  };

  const formatDate = (dateString: string) => {
    const options = { month: 'short', day: '2-digit' } as const;
    return new Intl.DateTimeFormat('en-US', options).format(new Date(dateString));
  };

  const getPriorityImage = (priority: 'LOW' | 'MEDIUM' | 'HIGH') => {
    switch (priority) {
      case 'LOW':
        return <Lowsvg />;
      case 'MEDIUM':
        return <Mediumsvg />;
      case 'HIGH':
        return <Highsvg />;
      default:
        return '';
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-white rounded shadow border border-gray-300">
      <h3 className="text-xl font-semibold mb-4 p-6 border-b">Tasks</h3>
      <ul>
        {currentTasks.map(task => (
          <li key={task.id} className="flex justify-between items-center mb-4 border-b border-gray-300 p-6">
            <div className="">
              
              {getPriorityImage(task.priority)}
                <h4>{task.todo}</h4>
              
              <div>
                <p className="ml-2 text-sm text-gray-600">{task.name}</p>
              </div>
              {!task.completed && (
                <div className=" text-red-500">
                  Mark as done
                </div>
              )}
            </div>
            <div className="flex items-center space-x-4">
              <button className={`${task.completed ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-600'} text-white font-bold py-2 px-4 rounded-full`}>
                {task.completed ? 'Done' : 'In-Progress'}
              </button>
              <p className="text-sm text-gray-600">{formatDate(task.createdAt)}</p>
            </div>

          </li>
        ))}
      </ul>
      <div className='p-6'>
        <ReactPaginate
          previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
          nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
          pageCount={Math.ceil(tasks.length / tasksPerPage)}
          onPageChange={handlePageChange}
          containerClassName="pagination flex justify-center mt-4"
          pageClassName="mx-1"
          pageLinkClassName="inline-block px-3 py-1 border rounded hover:bg-gray-100"
          previousClassName="mx-1"
          previousLinkClassName="inline-block px-3 py-1 border rounded hover:bg-gray-100"
          nextClassName="mx-1"
          nextLinkClassName="inline-block px-3 py-1 border rounded hover:bg-gray-100"
          breakClassName="mx-1"
          breakLinkClassName="inline-block px-3 py-1 border rounded hover:bg-gray-100"
          activeClassName="border border-red-600 text-red-600 bg-white"
          disabledClassName="text-gray-400 cursor-not-allowed"
        />
      </div>
    </div>
  );
}

export default Tasks;
