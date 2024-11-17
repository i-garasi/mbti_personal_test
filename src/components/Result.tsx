import React from 'react';
import { RefreshCcw } from 'lucide-react';

interface ResultProps {
  personalityType: string;
  personalities: Record<string, {
    title: string;
    traits: string[];
    description: string;
  }>;
  onReset: () => void;
}

function Result({ personalityType, personalities, onReset }: ResultProps) {
  const personality = personalities[personalityType];

  if (!personality) {
    return (
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          エラーが発生しました
        </h2>
        <p className="text-gray-600 mb-8">
          申し訳ありません。診断結果の取得に問題が発生しました。
        </p>
        <button
          onClick={onReset}
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
        >
          <RefreshCcw className="mr-2 h-5 w-5" />
          もう一度診断する
        </button>
      </div>
    );
  }

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        あなたの性格タイプは...
      </h2>

      <div className="bg-indigo-50 rounded-xl p-8 mb-8">
        <h3 className="text-4xl font-bold text-indigo-600 mb-2">
          {personalityType}
        </h3>
        <p className="text-xl text-gray-700 mb-6">{personality.title}</p>

        <div className="mb-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">主な特徴:</h4>
          <ul className="space-y-2">
            {personality.traits.map((trait, index) => (
              <li key={index} className="text-gray-700">{trait}</li>
            ))}
          </ul>
        </div>

        <p className="text-gray-700 leading-relaxed">
          {personality.description}
        </p>
      </div>

      <button
        onClick={onReset}
        className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
      >
        <RefreshCcw className="mr-2 h-5 w-5" />
        もう一度診断する
      </button>
    </div>
  );
}

export default Result;