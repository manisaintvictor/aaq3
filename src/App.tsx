import React from 'react';
import { useQuiz } from './hooks/useQuiz';
import QuizStart from './components/QuizStart';
import QuizQuestion from './components/QuizQuestion';
import QuizResults from './components/QuizResults';

function App() {
  const quiz = useQuiz();

  if (quiz.isCompleted && quiz.result) {
    return <QuizResults result={quiz.result} onRestart={quiz.startQuiz} />;
  }

  if (quiz.isPaused || (!quiz.currentQuestion && !quiz.isCompleted)) {
    return (
      <QuizStart 
        onStart={quiz.startQuiz}
        onResume={quiz.resumeQuiz}
        hasProgress={quiz.hasProgress}
      />
    );
  }

  return (
    <QuizQuestion
      question={quiz.currentQuestion}
      currentIndex={quiz.currentQuestion ? quiz.responses.findIndex(r => r.questionId === quiz.currentQuestion.id) >= 0 ? quiz.responses.findIndex(r => r.questionId === quiz.currentQuestion.id) : quiz.responses.length : 0}
      totalQuestions={quiz.totalQuestions}
      selectedOption={quiz.currentResponse?.selectedOptionId || null}
      onSelectOption={quiz.selectOption}
      onNext={quiz.goToNext}
      onPrevious={quiz.goToPrevious}
      onPause={quiz.pauseQuiz}
      canGoNext={quiz.canGoNext}
      canGoPrevious={quiz.canGoPrevious}
    />
  );
}

export default App;