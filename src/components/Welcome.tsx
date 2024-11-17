import React from 'react';
import { ArrowRight } from 'lucide-react';

interface WelcomeProps {
  onStart: () => void;
}

function Welcome({ onStart }: WelcomeProps) {
  return (
    <div className="text-center">
      <div className="mb-8">
        <img
          src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&fit=crop&q=80&w=1000"
          alt="Personality Test"
          className="rounded-lg mx-auto w-full max-w-2xl h-64 object-cover"
        />
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        あなたの性格タイプを発見しましょう
      </h2>

      <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
        20の質問を通じて、あなたの性格タイプを分析します。
        各質問には正解も不正解もありません。
        直感的に、最も自分に当てはまる回答を選んでください。
      </p>

      <button
        onClick={onStart}
        className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors"
      >
        診断を始める
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </div>
  );
}

export default Welcome;