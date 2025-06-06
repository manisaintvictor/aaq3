import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause } from 'lucide-react';
import { Question } from '../types/quiz';

interface QuizQuestionProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedOption: string | null;
  onSelectOption: (optionId: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  onPause: () => void;
  canGoNext: boolean;
  canGoPrevious: boolean;
}

export default function QuizQuestion({
  question,
  currentIndex,
  totalQuestions,
  selectedOption,
  onSelectOption,
  onNext,
  onPrevious,
  onPause,
  canGoNext,
  canGoPrevious
}: QuizQuestionProps) {
  const [isAnswering, setIsAnswering] = useState(false);
  const [justAnswered, setJustAnswered] = useState(false);
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  const handleOptionSelect = (optionId: string) => {
    if (isAnswering) return;
    
    setIsAnswering(true);
    setJustAnswered(true);
    onSelectOption(optionId);
    
    // Auto-advance after a brief delay for visual feedback
    setTimeout(() => {
      setIsAnswering(false);
      if (canGoNext) {
        onNext();
      }
      setJustAnswered(false);
    }, 800); // Slightly longer delay for better UX
  };

  // Reset justAnswered when question changes
  useEffect(() => {
    setJustAnswered(false);
    setIsAnswering(false);
  }, [question.id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-600">
              Question {currentIndex + 1} of {totalQuestions}
            </span>
            <button
              onClick={onPause}
              className="inline-flex items-center px-3 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-white rounded-lg transition-colors duration-200"
            >
              <Pause className="w-4 h-4 mr-1" />
              Pause
            </button>
          </div>
          <div className="text-sm font-medium text-gray-600">
            {Math.round(progress)}% Complete
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 rounded-full h-2 mb-12">
          <div 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 leading-relaxed">
            {question.text}
          </h2>

          <div className="space-y-4">
            {question.options.map((option, index) => (
              <button
                key={option.id}
                onClick={() => handleOptionSelect(option.id)}
                disabled={isAnswering}
                className={`w-full p-6 text-left rounded-xl border-2 transition-all duration-300 transform ${
                  selectedOption === option.id
                    ? 'border-indigo-600 bg-gradient-to-r from-indigo-50 to-purple-50 shadow-lg scale-[1.02]'
                    : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50 hover:scale-[1.01]'
                } ${
                  isAnswering 
                    ? 'cursor-not-allowed opacity-75' 
                    : 'hover:shadow-md cursor-pointer'
                } ${
                  justAnswered && selectedOption === option.id
                    ? 'animate-pulse'
                    : ''
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-6 h-6 rounded-full border-2 mr-4 flex-shrink-0 flex items-center justify-center transition-all duration-300 ${
                    selectedOption === option.id
                      ? 'border-indigo-600 bg-indigo-600 scale-110'
                      : 'border-gray-300'
                  }`}>
                    {selectedOption === option.id && (
                      <div className="w-2 h-2 bg-white rounded-full animate-scale-in"></div>
                    )}
                  </div>
                  <span className="text-lg text-gray-800 font-medium">
                    {option.text}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Auto-advance indicator */}
          {justAnswered && canGoNext && (
            <div className="mt-6 text-center">
              <div className="inline-flex items-center text-sm text-indigo-600 bg-indigo-50 px-4 py-2 rounded-lg">
                <div className="w-4 h-4 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin mr-2"></div>
                Moving to next question...
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <button
            onClick={onPrevious}
            disabled={!canGoPrevious}
            className={`inline-flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
              canGoPrevious
                ? 'bg-gray-200 hover:bg-gray-300 text-gray-800 hover:shadow-md transform hover:-translate-y-0.5'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            <ChevronLeft className="w-5 h-5 mr-1" />
            Previous
          </button>

          <div className="text-center">
            <p className="text-sm text-gray-500 mb-1">
              {selectedOption ? 'Answer recorded!' : 'Select an answer to continue'}
            </p>
            {!selectedOption && (
              <p className="text-xs text-gray-400">
                Questions auto-advance after selection
              </p>
            )}
          </div>

          <button
            onClick={onNext}
            disabled={!canGoNext || !selectedOption || isAnswering}
            className={`inline-flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-200 ${
              canGoNext && selectedOption && !isAnswering
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            {currentIndex === totalQuestions - 1 ? 'Finish Quiz' : 'Next'}
            <ChevronRight className="w-5 h-5 ml-1" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes scale-in {
          0% { transform: scale(0); }
          100% { transform: scale(1); }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}