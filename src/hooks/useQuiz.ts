import { useState, useEffect } from 'react';
import { QuizState, UserResponse, QuizResult } from '../types/quiz';
import { questions } from '../data/questions';
import { 
  calculateTotalScore, 
  calculateDimensionScores, 
  determineCategory,
  determineSubCategory,
  generatePersonalInsights,
  generateSabotageProfile,
  saveQuizData, 
  saveProgress, 
  loadProgress 
} from '../utils/scoring';

export function useQuiz() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestion: 0,
    responses: [],
    isCompleted: false,
    isPaused: false,
    startedAt: Date.now()
  });

  const [hasProgress, setHasProgress] = useState(false);

  useEffect(() => {
    const savedProgress = loadProgress();
    if (savedProgress && savedProgress.responses.length > 0) {
      setHasProgress(true);
    }
  }, []);

  const startQuiz = () => {
    setQuizState({
      currentQuestion: 0,
      responses: [],
      isCompleted: false,
      isPaused: false,
      startedAt: Date.now()
    });
    localStorage.removeItem('quizProgress');
    setHasProgress(false);
  };

  const resumeQuiz = () => {
    const savedProgress = loadProgress();
    if (savedProgress) {
      setQuizState({
        currentQuestion: savedProgress.currentQuestion,
        responses: savedProgress.responses,
        isCompleted: false,
        isPaused: false,
        startedAt: savedProgress.startedAt || Date.now()
      });
    }
  };

  const selectOption = (optionId: string) => {
    const currentQuestion = questions[quizState.currentQuestion];
    const selectedOption = currentQuestion.options.find(opt => opt.id === optionId);
    
    if (!selectedOption) return;

    const newResponse: UserResponse = {
      questionId: currentQuestion.id,
      selectedOptionId: optionId,
      points: selectedOption.points,
      timestamp: Date.now()
    };

    setQuizState(prev => {
      const updatedResponses = [
        ...prev.responses.filter(r => r.questionId !== newResponse.questionId),
        newResponse
      ];

      // Auto-save progress
      saveProgress(updatedResponses, prev.currentQuestion);

      return {
        ...prev,
        responses: updatedResponses
      };
    });
  };

  const goToNext = () => {
    if (quizState.currentQuestion < questions.length - 1) {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }));
    } else {
      completeQuiz();
    }
  };

  const goToPrevious = () => {
    if (quizState.currentQuestion > 0) {
      setQuizState(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1
      }));
    }
  };

  const pauseQuiz = () => {
    saveProgress(quizState.responses, quizState.currentQuestion);
    setQuizState(prev => ({
      ...prev,
      isPaused: true
    }));
  };

  const completeQuiz = () => {
    const totalScore = calculateTotalScore(quizState.responses);
    const dimensionScores = calculateDimensionScores(quizState.responses);
    const category = determineCategory(totalScore, dimensionScores);
    const subCategory = determineSubCategory(category, dimensionScores, quizState.responses);
    const insights = generatePersonalInsights(totalScore, dimensionScores, quizState.responses);
    const sabotageProfile = generateSabotageProfile(dimensionScores, quizState.responses);
    
    const result: QuizResult = {
      category,
      subCategory,
      totalScore,
      dimensionScores,
      responses: quizState.responses,
      completedAt: Date.now(),
      insights,
      sabotageProfile
    };

    saveQuizData(quizState.responses, result);
    localStorage.removeItem('quizProgress');

    setQuizState(prev => ({
      ...prev,
      isCompleted: true,
      result
    }));
  };

  const getCurrentResponse = () => {
    const currentQuestionId = questions[quizState.currentQuestion]?.id;
    return quizState.responses.find(r => r.questionId === currentQuestionId);
  };

  return {
    ...quizState,
    hasProgress,
    currentQuestion: questions[quizState.currentQuestion],
    currentResponse: getCurrentResponse(),
    totalQuestions: questions.length,
    canGoNext: quizState.currentQuestion < questions.length - 1 || quizState.responses.length === questions.length,
    canGoPrevious: quizState.currentQuestion > 0,
    startQuiz,
    resumeQuiz,
    selectOption,
    goToNext,
    goToPrevious,
    pauseQuiz
  };
}