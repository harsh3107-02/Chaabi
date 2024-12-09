export const fetchMockQuizData = async () => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        questionText: 'What is 2 + 2?',
        options: ['3', '4', '5', '6'],
      });
    }, 1000);
  });
};

export const saveGridConfig = async (config: any) => {
  return await new Promise((resolve) => {
    setTimeout(() => {
      console.log('Grid configuration saved:', config);
      resolve(true);
    }, 500);
  });
};