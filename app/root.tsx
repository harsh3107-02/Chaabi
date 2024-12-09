import React from 'react';
import { Outlet } from 'react-router-dom';
import './tailwind.css';

const AppRoot: React.FC = () => {
  return (
    <div>
      <header className="p-4 bg-blue-600 text-white">
        <h1 className="text-center text-xl">Responsive Snap Grid System</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppRoot;
