import React from 'react';
import DragElement from './DragElement';

const components = ['Progress Bar', 'Timer', 'Question Text', 'Image', 'Options'];

const NavigationDrawer: React.FC = () => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, type: string) => {
    event.dataTransfer.setData('type', type);
  };

  return (
    <div className="drawer w-64 p-4 border-r bg-gray-50">
      <h2 className="text-lg font-bold mb-4">Components</h2>
      {components.map((type) => (
        <DragElement key={type} type={type} onDragStart={handleDragStart} />
      ))}
    </div>
  );
};

export default NavigationDrawer;
