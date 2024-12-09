import React from 'react';

interface DragElementProps {
  type: string;
  onDragStart: (event: React.DragEvent<HTMLDivElement>, type: string) => void;
}

const DragElement: React.FC<DragElementProps> = ({ type, onDragStart }) => {
  return (
    <div
      draggable
      onDragStart={(event) => onDragStart(event, type)}
      className="draggable p-4 mb-2 bg-white border rounded shadow cursor-pointer hover:bg-gray-100"
    >
      {type}
    </div>
  );
};

export default DragElement;
