import React, { useState, useEffect } from 'react';
import QuizQuestion from '../components/QuizQuestion';
import { fetchMockQuizData } from '../Utils/api';

const UserView: React.FC = () => {
  const [quizData, setQuizData] = useState<any>(null);

  useEffect(() => {
    const loadQuiz = async () => {
      const data = await fetchMockQuizData();
      setQuizData(data);
    };
    loadQuiz();
  }, []);

  const handleAnswerSubmit = (answer: string) => {
    console.log('Answer submitted:', answer);
  };

  return (
    <div className="p-4">
      {quizData ? (
        <QuizQuestion
          questionText={quizData.questionText}
          options={quizData.options}
          onSubmit={handleAnswerSubmit}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UserView;