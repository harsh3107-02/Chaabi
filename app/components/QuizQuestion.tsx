import React from 'react';

type QuizProps = {
  questionText: string;
  options: string[];
  onSubmit: (answer: string) => void;
};

const QuizQuestion: React.FC<QuizProps> = ({ questionText, options, onSubmit }) => {
  const handleAnswerClick = (answer: string) => {
    onSubmit(answer);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">{questionText}</h1>
      <div className="mt-4">
        {options.map((option, index) => (
          <button
            key={index}
            className="block w-full p-2 mt-2 border rounded hover:bg-gray-200"
            onClick={() => handleAnswerClick(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizQuestion;