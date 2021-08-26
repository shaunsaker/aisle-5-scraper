import * as prompt from 'prompt';

export const getPrompt = (question: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    prompt.start();

    prompt.get([question], (error, result) => {
      if (error) {
        reject(error);
      }

      resolve(result[question] as string);
    });
  });
};
