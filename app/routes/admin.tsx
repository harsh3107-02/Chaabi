import React, { useState } from 'react';

interface GridItem {
  type: string;
  x: number;
  y: number;
}

interface GridCanvasProps {
  onConfigChange: (config: GridItem[]) => void;
}

const GridCanvas: React.FC<GridCanvasProps> = ({ onConfigChange }) => {
  const [gridItems, setGridItems] = useState<GridItem[]>([]);

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const type = event.dataTransfer.getData('type');
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.floor((event.clientX - rect.left) / 100) * 100;
    const y = Math.floor((event.clientY - rect.top) / 100) * 100;

    const newGridItems = [...gridItems, { type, x, y }];
    setGridItems(newGridItems);

    // Notify parent component about the updated configuration
    onConfigChange(newGridItems);
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
