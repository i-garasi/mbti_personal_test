import React from 'react';

interface QuestionProps {
  question: {
    text: string;
    options: { label: string; value: string }[];
  };
  currentNumber: number;
  totalQuestions: number;
  onAnswer: (answer: string) => void;
}

function Question({ question, currentNumber, totalQuestions, onAnswer }: QuestionProps) {
  return (
    <div>
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          質問 {currentNumber}
        </h3>
        <p className="text-gray-700 text-lg mb-6">{question.text}</p>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => onAnswer(option.value)}
              className="w-full text-left p-4 rounded-lg border border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 transition-colors"
            >
              <span className="text-gray-700">{option.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${(currentNumber / totalQuestions) * 100}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Question;