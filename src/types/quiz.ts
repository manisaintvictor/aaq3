export interface Question {
  id: number;
  text: string;
  options: Option[];
  dimension: DimensionType;
}

export interface Option {
  id: string;
  text: string;
  points: number;
}

export interface UserResponse {
  questionId: number;
  selectedOptionId: string;
  points: number;
  timestamp: number;
}

export interface QuizResult {
  category: CategoryType;
  subCategory: SubCategoryType;
  totalScore: number;
  dimensionScores: DimensionScores;
  responses: UserResponse[];
  completedAt: number;
  insights: PersonalInsights;
  sabotageProfile: SabotageProfile;
}

export type CategoryType = 
  | 'awareAuthentic'
  | 'cautiousExplorer' 
  | 'sensitiveConnector'
  | 'aspiringTrailblazer'
  | 'tentativeOptimist';

export type SubCategoryType = 
  | 'empoweredLeader' | 'wiseMentor' | 'authenticInfluencer'  // Aware Authentic
  | 'thoughtfulGrower' | 'strategicAuthenticator' | 'balancedEvolver'  // Cautious Explorer
  | 'empathicPleaser' | 'harmonySeeker' | 'relationshipFocused'  // Sensitive Connector
  | 'courageousBeginning' | 'determinedChanger' | 'hopefulExplorer'  // Aspiring Trailblazer
  | 'overwhelmedSeeker' | 'fearfulHoper' | 'stuckDreamer';  // Tentative Optimist

export type DimensionType = 
  | 'selfAwareness'
  | 'authenticity' 
  | 'resilience'
  | 'boundaries'
  | 'growth'
  | 'selfSabotage'
  | 'limitingBeliefs';

export interface DimensionScores {
  selfAwareness: number;        // Questions 1, 9, 10, 13
  authenticity: number;         // Questions 2, 4, 6, 8
  resilience: number;           // Questions 3, 15, 18, 19
  boundaries: number;           // Questions 7, 11, 14, 16
  growth: number;               // Questions 5, 12, 17, 20
  selfSabotage: number;         // Questions 21, 22, 23, 24
  limitingBeliefs: number;      // Questions 25, 26, 27, 28
}

export interface SabotageProfile {
  primaryPattern: string;
  triggerSituations: string[];
  internalDialogue: string[];
  coreBeliefs: string[];
  sabotageStrategies: string[];
  breakthroughOpportunities: string[];
}

export interface PersonalInsights {
  strengths: string[];
  growthAreas: string[];
  authenticityLevel: 'emerging' | 'developing' | 'strong' | 'mastered';
  primaryChallenge: string;
  nextSteps: string[];
  sabotageWarnings: string[];
  beliefTransformations: string[];
  innerDialogueShifts: string[];
}

export interface CategoryInfo {
  name: string;
  description: string;
  traits: string[];
  videoUrl: string;
  color: string;
  recommendations: string[];
  authenticityJourney: string;
  coreStrengths: string[];
  commonChallenges: string[];
  sabotagePatterns: string[];
  limitingBeliefs: string[];
  innerDialogue: string[];
  subCategories: Record<string, SubCategoryInfo>;
}

export interface SubCategoryInfo {
  name: string;
  description: string;
  specificSabotagePattern: string;
  coreLimitingBelief: string;
  typicalInnerDialogue: string[];
  breakthroughStrategy: string;
  nextLevelChallenge: string;
}

export interface QuizState {
  currentQuestion: number;
  responses: UserResponse[];
  isCompleted: boolean;
  isPaused: boolean;
  startedAt: number;
  result?: QuizResult;
}