import React from 'react';

const WelcomeMessage: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded shadow mb-6 flex items-center justify-between">
      <div>
        <h2 className="text-2xl font-semibold">Welcome back, John Doe</h2>
        <p>The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.</p>
        <button onClick={() => window.location.href = '#'} className="text-red-600 underline">Look here for more information</button>
      </div>
      <div className="ml-4">
        <svg width="167" height="120" viewBox="0 0 167 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M107 34C120.255 34 131 23.2548 131 10C131 -3.25483 120.255 -14 107 -14C93.7452 -14 83 -3.25483 83 10C83 23.2548 93.7452 34 107 34ZM107 50C129.091 50 147 32.0914 147 10C147 -12.0914 129.091 -30 107 -30C84.9086 -30 67 -12.0914 67 10C67 32.0914 84.9086 50 107 50Z" fill="#33074F" />
          <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M39 135.8C49.9352 135.8 58.8 126.935 58.8 116C58.8 105.065 49.9352 96.2 39 96.2C28.0648 96.2 19.2 105.065 19.2 116C19.2 126.935 28.0648 135.8 39 135.8ZM39 149C57.2254 149 72 134.225 72 116C72 97.7746 57.2254 83 39 83C20.7746 83 6 97.7746 6 116C6 134.225 20.7746 149 39 149Z" fill="#BC006D" />
          <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M152 63C156.971 63 161 58.9706 161 54C161 49.0294 156.971 45 152 45C147.029 45 143 49.0294 143 54C143 58.9706 147.029 63 152 63ZM152 69C160.284 69 167 62.2843 167 54C167 45.7157 160.284 39 152 39C143.716 39 137 45.7157 137 54C137 62.2843 143.716 69 152 69Z" fill="#BC006D" />
          <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M10 42C13.3137 42 16 39.3137 16 36C16 32.6863 13.3137 30 10 30C6.68629 30 4 32.6863 4 36C4 39.3137 6.68629 42 10 42ZM10 46C15.5228 46 20 41.5228 20 36C20 30.4772 15.5228 26 10 26C4.47715 26 0 30.4772 0 36C0 41.5228 4.47715 46 10 46Z" fill="#BC006D" />
          <path opacity="0.2" fill-rule="evenodd" clip-rule="evenodd" d="M115 87C118.314 87 121 84.3137 121 81C121 77.6863 118.314 75 115 75C111.686 75 109 77.6863 109 81C109 84.3137 111.686 87 115 87ZM115 91C120.523 91 125 86.5228 125 81C125 75.4772 120.523 71 115 71C109.477 71 105 75.4772 105 81C105 86.5228 109.477 91 115 91Z" fill="#33074F" />
        </svg>

      </div>
    </div>
  );
}

export default WelcomeMessage;
