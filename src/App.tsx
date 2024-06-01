import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import WelcomeMessage from './components/WelcomeMessage';
import Tasks from './components/Tasks';
import ActivityFeed from './components/ActivityFeed';
import TaskPriorities from './components/TaskPriorities';

const App: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <div className="p-6">
          <WelcomeMessage />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2">
              <Tasks />
            </div>
            <div className="space-y-6">
              <ActivityFeed />  
              <TaskPriorities />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
