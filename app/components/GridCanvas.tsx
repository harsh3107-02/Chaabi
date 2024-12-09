import React, { useState } from 'react';

interface GridItem {
  type: string;
  x: number;
  y: number;
}

const GridCanvas: React.FC = () => {
  const [gridItems, setGridItems] = useState<GridItem[]>([]);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const type = event.dataTransfer.getData('type');
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.floor((event.clientX - rect.left) / 100) * 100;
    const y = Math.floor((event.clientY - rect.top) / 100) * 100;

    setGridItems([...gridItems, { type, x, y }]);
  };

  return (
    <div
      className="grid relative bg-gray-100 h-full"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
    >
      {gridItems.map((item, index) => (
        <div
          key={index}
          className="absolute bg-blue-100 border p-2 rounded shadow"
          style={{ left: `${item.x}px`, top: `${item.y}px` }}
        >
          {item.type}
        </div>
      ))}
    </div>
  );
};

export default GridCanvas;
