import React, { useState } from 'react';
import { ArrowRight, RefreshCcw } from 'lucide-react';
import { questions } from './data/questions';
import { personalities } from './data/personalities';
import { calculatePersonalityType } from './utils/calculator';
import Welcome from './components/Welcome';
import Question from './components/Question';
import Result from './components/Result';

function App() {
  const [currentStep, setCurrentStep] = useState<'welcome' | 'question' | 'result'>('welcome');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const handleStart = () => {
    setCurrentStep('question');
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setCurrentStep('result');
    }
  };

  const handleReset = () => {
    setCurrentStep('welcome');
    setCurrentQuestion(0);
    setAnswers([]);
  };

  const getResult = () => {
    return calculatePersonalityType(answers);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">MBTI パーソナリティ診断</h1>
          <p className="text-gray-600">あなたの性格タイプを見つけましょう</p>
        </header>

        <main className="bg-white rounded-2xl shadow-xl p-8">
          {currentStep === 'welcome' && (
            <Welcome onStart={handleStart} />
          )}

          {currentStep === 'question' && (
            <Question
              question={questions[currentQuestion]}
              currentNumber={currentQuestion + 1}
              totalQuestions={questions.length}
              onAnswer={handleAnswer}
            />
          )}

          {currentStep === 'result' && (
            <Result
              personalityType={getResult()}
              personalities={personalities}
              onReset={handleReset}
            />
          )}
        </main>

        {currentStep === 'question' && (
          <div className="mt-6 text-center text-gray-600">
            <p>{currentQuestion + 1} / {questions.length}</p>
          </div>
        )}

        <footer className="mt-12 text-center text-gray-500 text-sm">
          <p>© 2024 MBTI Personality Test. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;