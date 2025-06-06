import { UserResponse, CategoryType, DimensionScores, PersonalInsights, SabotageProfile, SubCategoryType } from '../types/quiz';

export function calculateTotalScore(responses: UserResponse[]): number {
  return responses.reduce((total, response) => total + response.points, 0);
}

export function calculateDimensionScores(responses: UserResponse[]): DimensionScores {
  const dimensions: DimensionScores = {
    selfAwareness: 0,    // Questions 1, 9, 10, 13
    authenticity: 0,     // Questions 2, 4, 6, 8  
    resilience: 0,       // Questions 3, 15, 18, 19
    boundaries: 0,       // Questions 7, 11, 14, 16
    growth: 0,           // Questions 5, 12, 17, 20
    selfSabotage: 0,     // Questions 21, 22, 23, 24
    limitingBeliefs: 0   // Questions 25, 26, 27, 28
  };

  const dimensionMapping = {
    selfAwareness: [1, 9, 10, 13],
    authenticity: [2, 4, 6, 8],
    resilience: [3, 15, 18, 19],
    boundaries: [7, 11, 14, 16],
    growth: [5, 12, 17, 20],
    selfSabotage: [21, 22, 23, 24],
    limitingBeliefs: [25, 26, 27, 28]
  };

  responses.forEach(response => {
    Object.entries(dimensionMapping).forEach(([dimension, questionIds]) => {
      if (questionIds.includes(response.questionId)) {
        dimensions[dimension as keyof DimensionScores] += response.points;
      }
    });
  });

  return dimensions;
}

export function determineCategory(totalScore: number, dimensionScores: DimensionScores): CategoryType {
  // Enhanced categorization considering self-sabotage and limiting beliefs
  const sabotageScore = dimensionScores.selfSabotage;
  const beliefsScore = dimensionScores.limitingBeliefs;
  const coreAuthenticityScore = totalScore - sabotageScore - beliefsScore; // Score from first 20 questions

  // Primary categorization based on core authenticity score (out of 80)
  if (coreAuthenticityScore >= 68) return 'awareAuthentic';
  if (coreAuthenticityScore >= 56) return 'cautiousExplorer';
  if (coreAuthenticityScore >= 44) return 'sensitiveConnector';
  if (coreAuthenticityScore >= 32) return 'aspiringTrailblazer';
  return 'tentativeOptimist';
}

export function determineSubCategory(
  category: CategoryType, 
  dimensionScores: DimensionScores, 
  responses: UserResponse[]
): SubCategoryType {
  const { selfSabotage, limitingBeliefs, boundaries, authenticity, growth } = dimensionScores;

  switch (category) {
    case 'awareAuthentic':
      if (selfSabotage <= 10) return 'empoweredLeader';
      if (boundaries >= 14) return 'wiseMentor';
      return 'authenticInfluencer';

    case 'cautiousExplorer':
      if (growth >= 14) return 'thoughtfulGrower';
      if (boundaries >= 12) return 'strategicAuthenticator';
      return 'balancedEvolver';

    case 'sensitiveConnector':
      if (boundaries <= 8) return 'empathicPleaser';
      if (authenticity <= 10) return 'harmonySeeker';
      return 'relationshipFocused';

    case 'aspiringTrailblazer':
      if (growth >= 10) return 'courageousBeginning';
      if (selfSabotage <= 8) return 'determinedChanger';
      return 'hopefulExplorer';

    case 'tentativeOptimist':
      if (limitingBeliefs <= 6) return 'overwhelmedSeeker';
      if (selfSabotage <= 6) return 'fearfulHoper';
      return 'stuckDreamer';

    default:
      return 'overwhelmedSeeker';
  }
}

export function generateSabotageProfile(
  dimensionScores: DimensionScores,
  responses: UserResponse[]
): SabotageProfile {
  const { selfSabotage, limitingBeliefs } = dimensionScores;
  
  const profile: SabotageProfile = {
    primaryPattern: '',
    triggerSituations: [],
    internalDialogue: [],
    coreBeliefs: [],
    sabotageStrategies: [],
    breakthroughOpportunities: []
  };

  // Determine primary sabotage pattern
  if (selfSabotage <= 8) {
    profile.primaryPattern = "Success Avoidance - You unconsciously avoid or sabotage success when you get close to achieving it";
    profile.triggerSituations = [
      "When you're close to achieving a major goal",
      "When receiving recognition or praise",
      "When opportunities for advancement arise"
    ];
    profile.sabotageStrategies = [
      "Procrastination on important tasks",
      "Creating unnecessary obstacles",
      "Deflecting compliments or achievements"
    ];
  } else if (selfSabotage <= 12) {
    profile.primaryPattern = "Comfort Zone Protection - You retreat to familiar patterns when growth requires stepping into uncertainty";
    profile.triggerSituations = [
      "When facing new challenges or opportunities",
      "When required to step outside your comfort zone",
      "When change threatens current stability"
    ];
    profile.sabotageStrategies = [
      "Making excuses to avoid new opportunities",
      "Reverting to old patterns under stress",
      "Overthinking until the opportunity passes"
    ];
  } else {
    profile.primaryPattern = "Mild Self-Doubt - Occasional questioning of your capabilities, but generally moving forward";
    profile.triggerSituations = [
      "During periods of high stress or uncertainty",
      "When comparing yourself to others",
      "When facing criticism or setbacks"
    ];
    profile.sabotageStrategies = [
      "Second-guessing decisions",
      "Seeking excessive validation",
      "Minimizing your accomplishments"
    ];
  }

  // Determine core limiting beliefs
  if (limitingBeliefs <= 8) {
    profile.coreBeliefs = [
      "I don't deserve success or happiness",
      "People like me don't achieve big things",
      "I'm fundamentally flawed or broken"
    ];
  } else if (limitingBeliefs <= 12) {
    profile.coreBeliefs = [
      "I need to be perfect to be worthy",
      "If I change, I'll lose what I have",
      "I'm not ready yet - I need more preparation"
    ];
  } else {
    profile.coreBeliefs = [
      "I should be further along by now",
      "I might disappoint others if I'm authentic",
      "Success requires sacrificing my values"
    ];
  }

  // Generate internal dialogue patterns
  profile.internalDialogue = [
    "What if I'm not good enough?",
    "Maybe I should play it safe",
    "I don't want to let anyone down",
    "Who am I to want more?"
  ];

  // Breakthrough opportunities
  profile.breakthroughOpportunities = [
    "Recognize sabotage patterns as they arise",
    "Challenge limiting beliefs with evidence",
    "Practice self-compassion during setbacks",
    "Take small authentic actions despite fear"
  ];

  return profile;
}

export function generatePersonalInsights(
  totalScore: number, 
  dimensionScores: DimensionScores, 
  responses: UserResponse[]
): PersonalInsights {
  const insights: PersonalInsights = {
    strengths: [],
    growthAreas: [],
    authenticityLevel: 'emerging',
    primaryChallenge: '',
    nextSteps: [],
    sabotageWarnings: [],
    beliefTransformations: [],
    innerDialogueShifts: []
  };

  // Determine authenticity level based on core score (excluding sabotage/beliefs)
  const coreScore = totalScore - dimensionScores.selfSabotage - dimensionScores.limitingBeliefs;
  if (coreScore >= 68) insights.authenticityLevel = 'mastered';
  else if (coreScore >= 56) insights.authenticityLevel = 'strong';
  else if (coreScore >= 44) insights.authenticityLevel = 'developing';
  else insights.authenticityLevel = 'emerging';

  // Identify strengths (dimensions scoring 13+ out of 16)
  Object.entries(dimensionScores).forEach(([dimension, score]) => {
    if (score >= 13) {
      switch (dimension) {
        case 'selfAwareness':
          insights.strengths.push('Strong self-awareness and self-understanding');
          break;
        case 'authenticity':
          insights.strengths.push('Comfortable expressing your authentic self');
          break;
        case 'resilience':
          insights.strengths.push('Resilient mindset toward challenges and setbacks');
          break;
        case 'boundaries':
          insights.strengths.push('Healthy boundary-setting abilities');
          break;
        case 'growth':
          insights.strengths.push('Committed to personal growth and development');
          break;
        case 'selfSabotage':
          insights.strengths.push('Strong resistance to self-sabotaging behaviors');
          break;
        case 'limitingBeliefs':
          insights.strengths.push('Empowering beliefs about your potential and worth');
          break;
      }
    }
  });

  // Identify growth areas (dimensions scoring below 10)
  Object.entries(dimensionScores).forEach(([dimension, score]) => {
    if (score < 10) {
      switch (dimension) {
        case 'selfAwareness':
          insights.growthAreas.push('Developing deeper self-awareness and self-understanding');
          break;
        case 'authenticity':
          insights.growthAreas.push('Building confidence in authentic self-expression');
          break;
        case 'resilience':
          insights.growthAreas.push('Strengthening resilience and growth mindset');
          break;
        case 'boundaries':
          insights.growthAreas.push('Learning to set and maintain healthy boundaries');
          break;
        case 'growth':
          insights.growthAreas.push('Embracing personal growth and self-improvement');
          break;
        case 'selfSabotage':
          insights.growthAreas.push('Recognizing and interrupting self-sabotage patterns');
          break;
        case 'limitingBeliefs':
          insights.growthAreas.push('Transforming limiting beliefs into empowering ones');
          break;
      }
    }
  });

  // Determine primary challenge based on lowest scoring dimension
  const lowestDimension = Object.entries(dimensionScores).reduce((lowest, current) => 
    current[1] < lowest[1] ? current : lowest
  );

  switch (lowestDimension[0]) {
    case 'selfSabotage':
      insights.primaryChallenge = 'Overcoming self-sabotage patterns that prevent you from achieving your potential';
      break;
    case 'limitingBeliefs':
      insights.primaryChallenge = 'Transforming limiting beliefs that keep you stuck in old patterns';
      break;
    case 'selfAwareness':
      insights.primaryChallenge = 'Developing a clearer understanding of your authentic self and values';
      break;
    case 'authenticity':
      insights.primaryChallenge = 'Finding the courage to express your true thoughts and feelings';
      break;
    case 'resilience':
      insights.primaryChallenge = 'Building resilience and viewing challenges as growth opportunities';
      break;
    case 'boundaries':
      insights.primaryChallenge = 'Learning to set boundaries and prioritize your own needs';
      break;
    case 'growth':
      insights.primaryChallenge = 'Embracing continuous growth and self-improvement practices';
      break;
  }

  // Generate sabotage warnings
  if (dimensionScores.selfSabotage < 10) {
    insights.sabotageWarnings = [
      "Watch for procrastination when approaching important goals",
      "Notice when you deflect compliments or minimize achievements",
      "Be aware of creating unnecessary obstacles near success"
    ];
  } else if (dimensionScores.selfSabotage < 13) {
    insights.sabotageWarnings = [
      "Monitor tendency to revert to old patterns under stress",
      "Notice when you seek excessive validation before acting",
      "Be aware of overthinking that leads to missed opportunities"
    ];
  }

  // Generate belief transformations
  if (dimensionScores.limitingBeliefs < 10) {
    insights.beliefTransformations = [
      "From 'I don't deserve success' to 'I am worthy of all good things'",
      "From 'People like me don't achieve big things' to 'I have unlimited potential'",
      "From 'I'm fundamentally flawed' to 'I am perfectly imperfect and growing'"
    ];
  } else if (dimensionScores.limitingBeliefs < 13) {
    insights.beliefTransformations = [
      "From 'I need to be perfect' to 'Progress is more important than perfection'",
      "From 'I'm not ready yet' to 'I learn and grow through taking action'",
      "From 'I might lose what I have' to 'Growth enhances what I already have'"
    ];
  }

  // Generate inner dialogue shifts
  insights.innerDialogueShifts = [
    "From 'What if I fail?' to 'What if I succeed beyond my wildest dreams?'",
    "From 'I'm not good enough' to 'I am enough and I'm getting better every day'",
    "From 'Who am I to want more?' to 'Who am I not to pursue my dreams?'"
  ];

  // Generate next steps based on authenticity level and primary challenges
  switch (insights.authenticityLevel) {
    case 'mastered':
      insights.nextSteps = [
        'Use your authenticity to mentor and inspire others',
        'Take on leadership roles that align with your values',
        'Continue challenging yourself with new growth opportunities',
        'Address any remaining sabotage patterns that limit your impact'
      ];
      break;
    case 'strong':
      insights.nextSteps = [
        'Practice expressing your authentic self in new situations',
        'Work on your primary challenge area identified above',
        'Seek opportunities to lead with your authentic voice',
        'Address sabotage patterns that emerge during growth'
      ];
      break;
    case 'developing':
      insights.nextSteps = [
        'Practice small acts of authenticity daily',
        'Focus intensively on your lowest-scoring dimension',
        'Interrupt sabotage patterns as soon as you notice them',
        'Challenge one limiting belief each week with evidence'
      ];
      break;
    case 'emerging':
      insights.nextSteps = [
        'Begin with gentle self-exploration and reflection',
        'Practice one authentic choice each day, no matter how small',
        'Work with a coach or therapist to address sabotage patterns',
        'Start transforming your most limiting belief'
      ];
      break;
  }

  return insights;
}

export function saveQuizData(responses: UserResponse[], result: any) {
  const quizData = {
    responses,
    result,
    completedAt: Date.now()
  };
  
  localStorage.setItem('quizResult', JSON.stringify(quizData));
}

export function loadSavedQuizData() {
  const saved = localStorage.getItem('quizResult');
  return saved ? JSON.parse(saved) : null;
}

export function saveProgress(responses: UserResponse[], currentQuestion: number) {
  const progressData = {
    responses,
    currentQuestion,
    savedAt: Date.now(),
    startedAt: Date.now()
  };
  
  localStorage.setItem('quizProgress', JSON.stringify(progressData));
}

export function loadProgress() {
  const saved = localStorage.getItem('quizProgress');
  return saved ? JSON.parse(saved) : null;
}