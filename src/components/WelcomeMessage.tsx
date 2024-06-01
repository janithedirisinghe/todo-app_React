import React from 'react';

const WelcomeMessage: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded shadow mb-6">
      <h2 className="text-2xl font-semibold">Welcome back, John Doe</h2>
      <p>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.</p>
      <a href="#" className="text-purple-600">Look here for more information</a>
    </div>
  );
}

export default WelcomeMessage;